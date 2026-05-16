import React, { useState, useRef } from 'react';
import { Container, Button, ProgressBar } from 'react-bootstrap';

// Accepts a `tracks` prop - array of { title, artist, src }
function MusicPlayer({ tracks = [] }) {
  const audioRef = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  return (
    <Container>
      {/* Album art / track info */}
      {/* Play / pause / skip controls */}
      {/* Progress bar */}
      {/* Track list */}
      <audio ref={audioRef} />
    </Container>
  );
}

export default MusicPlayer;
