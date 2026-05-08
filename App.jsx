import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MusicPage from './pages/MusicPage';
import GamePage from './pages/GamePage';
import ShowPage from './pages/ShowPage';
import SillyPhotos from './pages/SillyPhotos';
import ProjectsPortfolio from './pages/ProjectsPortfolio';
import SocialsPage from './pages/SocialsPage';
import ResumePage from './pages/ResumePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"           element={<HomePage />} />
        <Route path="/music"      element={<MusicPage />} />
        <Route path="/games"      element={<GamePage />} />
        <Route path="/shows"      element={<ShowPage />} />
        <Route path="/photos"     element={<SillyPhotos />} />
        <Route path="/projects"   element={<ProjectsPortfolio />} />
        <Route path="/socials"    element={<SocialsPage />} />
        <Route path="/resume"     element={<ResumePage />} />
      </Routes>
    </Router>
  );
}

export default App;
