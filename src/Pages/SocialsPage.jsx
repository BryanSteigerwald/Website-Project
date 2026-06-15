import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const socials = [
  {
    platform: 'GitHub',
    handle: '@BryanSteigerwald',
    url: 'https://github.com/BryanSteigerwald',
    color: '#333',
  },
  {
    platform: 'LinkedIn',
    handle: 'Bryan Steigerwald',
    url: 'https://www.linkedin.com/in/bryan-steigerwald-145601330/',
    color: '#0077b5',
  },
];

function SocialsPage() {
  return (
    <Container className="py-4">
      <h2 className="fw-bold mb-4">Socials</h2>
      <Row className="g-3">
        {socials.map(({ platform, handle, url, color }) => (
          <Col key={platform} xs={12} md={6}>
            <Card className="p-3 h-100">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <div className="fw-bold fs-5" style={{ color }}>{platform}</div>
                  <div className="text-muted small">{handle}</div>
                </div>
                <Button
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline-secondary"
                  size="sm"
                >
                  Visit
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SocialsPage;