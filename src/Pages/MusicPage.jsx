import React, { useState, useEffect } from 'react';
import { Container, Tabs, Tab, Button, Card, Row, Col } from 'react-bootstrap';
import { loginWithSpotify, getTopTracks, getTopArtists} from '../spotify';

function MusicPage() {
  const [activeTab, setActiveTab] = useState('tracks');
  const [topTracks, setTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const token = localStorage.getItem('spotify_token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tracks = await getTopTracks();
        setTopTracks(tracks);
        const artists = await getTopArtists();
        setTopArtists(artists);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    if (token) fetchData();
  }, [token]);

  return (
    <Container className ="mt-4">
      <Tabs activeKey={activeTab} onSelect={setActiveTab}>
        <Tab eventKey="tracks" title="Top Tracks">
          {/* Favorite songs/albums list */}
          {!token ? (
            <div className="text-center mt-5">
              <Button onClick={loginWithSpotify} variant="success" className="mt-3">
                Login with Spotify
              </Button>
            </div>
          ) : (
            <Row className="mt-3 g-3">
              {topTracks.map((track, index) => (
                <Col key={track.id} xs={12} md={6}>
                  <Card className="d-flex flex-row align-items-center p-2">
                    <span className="fw-bold me-3 fs-5">#{index + 1}</span>
                    <img
                        src={track.album.images[0]?.url}
                        alt={track.name}
                        width={50}
                        height={50}
                        className="rounded-circle me-3"
                      />
                    <div>
                      <div className="fw-bold">{track.name}</div>
                      <div className="text-muted small"> Artist: {track.artists[0].name}</div>
                      <div className="text-muted small"> Album: {track.album.name}</div>
                      <div className="text-muted small">Length: {new Date(track.duration_ms).toISOString().substr(14, 5)}</div>
                      <div className="text-muted small">Year: {new Date(track.album.release_date).getFullYear()}</div>
                      <div className="text-muted small">
                        <Button 
                          href={track.external_urls.spotify} 
                          target="_blank" 
                          variant="outline-success" 
                          size="sm"
                        >
                          Open in Spotify
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Tab>
        <Tab eventKey="genres" title="Top Artists">
          {!token ? (
            <div className="text-center mt-5">
              <Button onClick={loginWithSpotify} variant="success" className="mt-3">
                Login with Spotify
              </Button>
            </div>
          ) : (
            <Row className="mt-3 g-3">
              {topArtists.map((artist, index) => (
                <Col key={artist.id} xs={12} md={6}>
                  <Card className="d-flex flex-row align-items-center p-2">
                    <span className="fw-bold me-3 fs-5">#{index + 1}</span>
                    <img
                      src={artist.images[2]?.url}
                      alt={artist.name}
                      width={50}
                      height={50}
                      className="rounded-circle me-3"
                    />
                    <div>
                      <div className="fw-bold">{artist.name}</div>
                      <div className="text-muted small">
                        {artist.genres}
                      </div>
                      <div className="text-muted small">
                        <Button 
                          href={artist.external_urls.spotify} 
                          target="_blank" 
                          variant="outline-success" 
                          size="sm"
                        >
                          Open in Spotify
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Tab>
      </Tabs>
    </Container>
  );
}

export default MusicPage;
