import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap';

function Navbar() {
  const location = useLocation();

  return (
    <BsNavbar>
      <Container>
        {/* Logo / Brand */}
        {/* Nav links - map over routes or list manually */}
        {/* Highlight active link using location.pathname */}
      </Container>
    </BsNavbar>
  );
}

export default Navbar;
