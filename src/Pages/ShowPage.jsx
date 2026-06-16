import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const shows = [
  // --- Top picks (10/10 from AniList) ---
  {
    title: 'Bocchi the Rock!',
    cover: '',
    genre: 'Comedy, Music, Slice of Life',
    rating: 10,
    status: 'Completed',
    type: 'Anime',
    topPick: true,
    review: '',
  },
  {
    title: 'Code Geass: Hangyaku no Lelouch R2',
    cover: '',
    genre: 'Mecha, Drama, Sci-Fi',
    rating: 10,
    status: 'Completed',
    type: 'Anime',
    topPick: true,
    review: '',
  },
  {
    title: 'Kimi no Suizou wo Tabetai',
    cover: '',
    genre: 'Drama, Romance',
    rating: 10,
    status: 'Completed',
    type: 'Anime',
    topPick: true,
    review: '',
  },
  {
    title: 'Made in Abyss',
    cover: '',
    genre: 'Adventure, Drama, Fantasy, Mystery',
    rating: 10,
    status: 'Completed',
    type: 'Anime',
    topPick: true,
    review: '',
  },
  {
    title: 'One Piece',
    cover: '',
    genre: 'Adventure, Fantasy',
    rating: 10,
    status: 'Completed',
    type: 'Anime',
    topPick: true,
    review: '',
  },
  {
    title: 'Steins;Gate',
    cover: '',
    genre: 'Sci-Fi, Thriller, Drama',
    rating: 10,
    status: 'Completed',
    type: 'Anime',
    topPick: true,
    review: '',
  },

  // --- Live action shows ---
  {
    title: 'Breaking Bad',
    cover: '',
    genre: 'Crime, Drama, Thriller',
    rating: '10',
    status: 'Completed',
    type: 'Show',
    topPick: false,
    review: '',
  },
  {
    title: 'Better Call Saul',
    cover: '',
    genre: 'Crime, Drama',
    rating: '10',
    status: 'Completed',
    type: 'Show',
    topPick: false,
    review: '',
  },

  // --- Add more below following the same shape ---
  // {
  //   title: 'Chainsaw Man',
  //   cover: '',
  //   genre: 'Action, Horror, Supernatural',
  //   rating: 9,
  //   status: 'Completed',
  //   type: 'Anime',
  //   topPick: false,
  //   review: '',
  // },
];

const statusColor = {
  'Watching':       'success',
  'Completed':      'primary',
  'Dropped':        'danger',
  'Plan to Watch':  'warning',
};

function ShowPage() {
  const [filter, setFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');

  const filtered = shows.filter(s => {
    const statusMatch = filter === 'All' || (filter === 'Top Picks' ? s.topPick : s.status === filter);
    const typeMatch = typeFilter === 'All' || s.type === typeFilter;
    return statusMatch && typeMatch;
  });

  return (
    <Container className="py-4">
      <h2 className="fw-bold mb-3">Shows & Anime</h2>

      {/* Status filters */}
      <div className="d-flex gap-2 mb-2 flex-wrap">
        {['All', 'Top Picks', 'Watching', 'Completed', 'Dropped', 'Plan to Watch'].map(s => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`btn btn-sm ${filter === s ? 'btn-dark' : 'btn-outline-secondary'}`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Type filters */}
      <div className="d-flex gap-2 mb-4">
        {['All', 'Anime', 'Show'].map(t => (
          <button
            key={t}
            onClick={() => setTypeFilter(t)}
            className={`btn btn-sm ${typeFilter === t ? 'btn-dark' : 'btn-outline-secondary'}`}
          >
            {t}
          </button>
        ))}
      </div>

      <Row className="g-3">
        {filtered.map((show) => (
          <Col key={show.title} xs={12} md={6} lg={4}>
            <Card className="h-100">
              {show.cover && (
                <Card.Img
                  variant="top"
                  src={show.cover}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              )}
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-1">
                  <Card.Title className="fw-bold mb-0">
                    {show.topPick && <span className="me-1">⭐</span>}
                    {show.title}
                  </Card.Title>
                  <div className="d-flex flex-column gap-1 align-items-end">
                    <Badge bg={statusColor[show.status] ?? 'secondary'}>{show.status}</Badge>
                    <Badge bg="dark">{show.type}</Badge>
                  </div>
                </div>
                <div className="text-muted small mb-1">{show.genre}</div>
                <div className="fw-bold mb-2">⭐ {show.rating}/10</div>
                <Card.Text className="small">{show.review}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ShowPage;