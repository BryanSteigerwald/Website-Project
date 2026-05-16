const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;

console.log('CLIENT_ID:', CLIENT_ID);
console.log('REDIRECT_URI:', REDIRECT_URI);

function generateRandomString(length) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

async function generateCodeChallenge(codeVerifier) {
  const data = new TextEncoder().encode(codeVerifier);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export async function loginWithSpotify() {
  const codeVerifier = generateRandomString(128);
  const codeChallenge = await generateCodeChallenge(codeVerifier);

  // Store verifier so getAccessToken can use it later
  localStorage.setItem('code_verifier', codeVerifier);
  console.log('Verifier saved:', localStorage.getItem('code_verifier'));
  const url = new URL('https://accounts.spotify.com/authorize');
  url.searchParams.append('response_type', 'code');
  url.searchParams.append('client_id', CLIENT_ID);
  url.searchParams.append('scope', 'user-read-private user-read-email user-top-read');
  url.searchParams.append('redirect_uri', REDIRECT_URI);
  url.searchParams.append('code_challenge_method', 'S256');
  url.searchParams.append('code_challenge', codeChallenge);

  window.location.href = url.toString();
}

export async function getTopTracks() {
  const token = localStorage.getItem('spotify_token');
  const response = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=medium_term', {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await response.json();

  // If token expired or invalid, clear it so login button shows again
  if (!response.ok) {
    localStorage.removeItem('spotify_token');
    return [];
  }

  // before returning i want to filter out duplicate artists, so if an artist has multiple top tracks, only the highest ranked one shows
  const seenArtists = new Set();
  const uniqueTracks = data.items.filter(track => {
    const artist = track.artists[0].name;
    if (seenArtists.has(artist)) return false;
    seenArtists.add(artist);
    return true;
  }).slice(0, 25);

  return uniqueTracks;
}

export async function getAccessToken(code) {
  const codeVerifier = localStorage.getItem('code_verifier');
  console.log('Exchanging code:', code);
  console.log('Using verifier:', codeVerifier);

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI,
      code_verifier: codeVerifier,
    }),
  });

  const data = await response.json();
  console.log('Token response:', data); // will show the error if it failed
  localStorage.setItem('spotify_token', data.access_token);
  return data.access_token;
}
