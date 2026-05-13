import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import MusicPage from './Pages/MusicPage';
import GamePage from './Pages/GamePage';
import ShowPage from './Pages/ShowPage';
import SillyPhotos from './Pages/SillyPhotos';
import ProjectsPortfolio from './Pages/ProjectsPortfolio';
import SocialsPage from './Pages/SocialsPage';
import ResumePage from './Pages/ResumePage';

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
