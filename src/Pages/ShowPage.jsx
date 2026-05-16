import React, { useState } from 'react';
import { Container, Row, Col, Badge, Form } from 'react-bootstrap';

function ShowPage() {
  const [filter, setFilter] = useState('all'); // 'all' | 'anime' | 'shows'

  return (
    <Container>
      {/* Filter toggle: All / Anime / Shows */}
      {/* Grid of cards - title, cover image, rating, status (watching/completed/etc) */}
      {/* Could add a tier list section */}
    </Container>
  );
}

export default ShowPage;
