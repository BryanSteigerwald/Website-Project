import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function HomePage() {
  return (
    <Container>
      {/* Hero section - name, tagline */}
      <Row  className="my-4">
        <Col>
          <h1 className="display-4">Hi, I'm Bryan welcome to my Website!</h1>
        </Col>
      </Row>

      {/* About Me blurb */}
      <Row className="my-5">
        <Col>
          <h2 className="display-5">About Me</h2>
          <p>Computer Science student at the University of Colorado Boulder. I love coding, games, music, anime, tv shows, furry community, silly little things, and building things like this! Feel free to poke around this site and find out about me!</p>
        </Col>
      </Row>
      {/* Profile photo */}
      <Row className="my-5">
        <Col>
          <p>Fill..</p>
        </Col>
      </Row>
      {/* Quick links to other pages */}
      <Row className="my-5">
        <Col>
          <h2 className="display-5">Explore</h2>
          <ul>
            <li><a href="/ProjectsPortfolio">Projects</a></li>
            <li><a href="/ResumePage">Resume</a></li>
            <li><a href="/MusicPage">Music</a></li>
            <li><a href="/ShowPage">Shows/Anime</a></li>
            <li><a href="/SillyPhotos">Photos</a></li>   
            <li><a href="/SocialsPage">Socials</a></li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
