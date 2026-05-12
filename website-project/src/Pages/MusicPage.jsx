import React, { useState } from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import MusicPlayer from '../components/MusicPlayer';

function MusicPage() {
  const [activeTab, setActiveTab] = useState('favorites');

  return (
    <Container>
      <Tabs activeKey={activeTab} onSelect={setActiveTab}>
        <Tab eventKey="favorites" title="Favorites">
          {/* Favorite songs/albums list */}
        </Tab>
        <Tab eventKey="player" title="Player">
          {/* <MusicPlayer /> */}
        </Tab>
        <Tab eventKey="genres" title="Genres">
          {/* Genre breakdown or tags */}
        </Tab>
      </Tabs>
    </Container>
  );
}

export default MusicPage;
