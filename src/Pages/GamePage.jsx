import React, { useState } from 'react';
import { Container, Tabs, Tab, Row, Col, Card, Badge } from 'react-bootstrap';

const games = [
  {
    title: '',
    cover: '',
    genre: '',
    rating: '',
    status: '', 
    review: '',
  },
];

const achievements = [
  {
    title: '',      // achievement name
    game: '',       // which game
    description: '',
    completed: true, // true or false
  },
];

const statusColor = {
  'Playing':   'success',
  'Completed': 'primary',
  'Dropped':   'danger',
};

function GamePage() {
  const [activeTab, setActiveTab] = useState('library');
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? games : games.filter(g => g.status === filter);

  return (
    <Container className="py-4">
      <h2 className="fw-bold mb-3">Games</h2>
      <Tabs activeKey={activeTab} onSelect={setActiveTab}>

        {/* LIBRARY TAB */}
        <Tab eventKey="library" title="Library">
          <div className="d-flex gap-2 my-3">
            {['All', 'Playing', 'Completed', 'Dropped'].map(s => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`btn btn-sm ${filter === s ? 'btn-dark' : 'btn-outline-secondary'}`}
              >
                {s}
              </button>
            ))}
          </div>
          <Row className="g-3">
            {filtered.map((game) => (
              <Col key={game.title} xs={12} md={6} lg={4}>
                <Card className="h-100">
                  {game.cover && (
                    <Card.Img
                      variant="top"
                      src={game.cover}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                  )}
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start mb-1">
                      <Card.Title className="fw-bold mb-0">{game.title}</Card.Title>
                      <Badge bg={statusColor[game.status] ?? 'secondary'}>{game.status}</Badge>
                    </div>
                    <div className="text-muted small mb-1">{game.genre}</div>
                    <div className="fw-bold mb-2">⭐ {game.rating}/10</div>
                    <Card.Text className="small">{game.review}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Tab>

        {/* ACHIEVEMENTS TAB */}
        <Tab eventKey="achievements" title="Achievements">
          <Row className="g-3 mt-2">
            {achievements.map((achievement) => (
              <Col key={achievement.title} xs={12} md={6}>
                <Card className="p-3 h-100">
                  <div className="d-flex align-items-start justify-content-between">
                    <div>
                      <div className="fw-bold">{achievement.title}</div>
                      <div className="text-muted small mb-1">{achievement.game}</div>
                      <div className="small">{achievement.description}</div>
                    </div>
                    <Badge bg={achievement.completed ? 'success' : 'secondary'}>
                      {achievement.completed ? '✓ Done' : 'In Progress'}
                    </Badge>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Tab>

      </Tabs>
    </Container>
  );
}

export default GamePage;