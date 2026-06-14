# Personal Website

My personal portfolio site built with React, Vite, and Bootstrap. Includes pages for music, games, shows/anime, photos, projects, socials, and a resume — with live Spotify integration showing my top tracks, artists, and genres.

## Tech Stack

- **React** (Vite)
- **React Router** for page navigation
- **React Bootstrap** + Bootstrap 5 for styling
- **Spotify Web API** (Implicit Grant Flow) for music data

## Pages

- **Home** — landing page / about me
- **Music** — top tracks, top artists, and top genres pulled live from Spotify
- **Games** — library, competitive stats, and achievements (manually curated)
- **Shows/Anime** — watch list with ratings, statuses, and top picks
- **Projects** — portfolio of coding projects
- **Socials** — links to GitHub, LinkedIn, etc.
- **Resume** — downloadable resume / CV

## Getting Started

### 1. Install dependencies

```bash
npm install
npm install react-router-dom react-bootstrap bootstrap
```

### 2. Set up environment variables

Create a `.env` file in the project root:

```
VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id
VITE_SPOTIFY_REDIRECT_URI=http://127.0.0.1:5173/callback
```

> **Note:** `.env` is gitignored and should never be committed. Get your Client ID from the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) and add the redirect URI under your app's settings.

### 3. Run the dev server

```bash
npm run dev
```

Visit `http://127.0.0.1:5173`.

## Spotify Integration

The Music page uses Spotify's **Implicit Grant Flow**:

1. User clicks "Login with Spotify"
2. Redirected to Spotify for authorization
3. Spotify redirects back to `/callback` with an access token in the URL hash
4. Token is stored in `localStorage`.
   
## Project Structure

```
src/
├── App.jsx
├── spotify.js              # Spotify auth + API helpers
├── components/
│   └── Navbar.jsx
└── pages/
    ├── HomePage.jsx
    ├── MusicPage.jsx
    ├── GamePage.jsx
    ├── ShowPage.jsx
    ├── SillyPhotos.jsx
    ├── ProjectsPortfolio.jsx
    ├── SocialsPage.jsx
    ├── ResumePage.jsx
    └── Callback.jsx         # Spotify OAuth redirect handler
```

## Roadmap

- [ ] AniList integration for the Shows/Anime page
- [ ] Token refresh handling for Spotify
- [ ] Fill in Games, Shows, Socials, and Projects content
- [ ] Resume page styling
