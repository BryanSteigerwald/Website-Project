import React, { useState, useEffect } from 'react';
import { Container, Tabs, Tab, Button, Card, Row, Col } from 'react-bootstrap';
import { loginWithSpotify, getTopTracks } from '../spotify';

function MusicPage() {
  const [activeTab, setActiveTab] = useState('favorites');
  const [topTracks, setTopTracks] = useState([]);
  const token = localStorage.getItem('spotify_token');

  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        const tracks = await getTopTracks();
        setTopTracks(tracks);
      } catch (error) {
        console.error('Error fetching top tracks:', error);
      }
    };

    fetchTopTracks();
  }, []);

  return (
    <Container className ="mt-4">
      <Tabs activeKey={activeTab} onSelect={setActiveTab}>
        <Tab eventKey="favorites" title="Favorites">
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
                    <img src={track.album.images[2].url} alt={track.name} width={50} height={50} className="me-3" />
                    <div>
                      <div className="fw-bold">{track.name}</div>
                      <div className="text-muted small">{track.artists.map(a => a.name).join(', ')}</div>
                      <div className="text-muted small">{track.album.name}</div>
                      <div className="text-muted small">{new Date(track.duration_ms).toISOString().substr(14, 5)}</div>
                      <div className="text-muted small">{new Date(track.album.release_date).getFullYear()}</div>
                      <div className="text-muted small">
                        {/* plays embeded track */}
                        <iframe
                          src={`https://open.spotify.com/embed/track/${track.id}`}
                          width="100%"
                          height="80"
                          frameBorder="0"
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        />
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Tab>
        <Tab eventKey="genres" title="Genres">
          {/* Genre breakdown or tags */}
        </Tab>
      </Tabs>
    </Container>
  );
}

export default MusicPage;
