import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap';
import '../App.css';

function Navbar() {
  const location = useLocation();

  return (
    <BsNavbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <BsNavbar.Toggle aria-controls="navbarNav" />
        <BsNavbar.Collapse id="navbarNav">
          <Nav className="navbar">
            <Nav.Item className="nav-item">
              <Nav.Link as={Link} to="/"         active={location.pathname === '/'}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link as={Link} to="/projects" active={location.pathname === '/projects'}>Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link as={Link} to="/resume"   active={location.pathname === '/resume'} className="nav-link">Resume</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link as={Link} to="/music"    active={location.pathname === '/music'}>Music</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link as={Link} to="/shows"    active={location.pathname === '/shows'}>Shows</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link as={Link} to="/games"  active={location.pathname === '/games'}>Games</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link as={Link} to="/photos"   active={location.pathname === '/photos'}>Photos</Nav.Link>
            </Nav.Item>
            <Nav.Item className="nav-item">
              <Nav.Link as={Link} to="/socials"  active={location.pathname === '/socials'}>Socials</Nav.Link>
            </Nav.Item>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;
