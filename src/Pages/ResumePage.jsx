import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import pdf1 from '../assets/pdf1.png';
import pdf2 from '../assets/pdf2.png';
import resumePDF from '../assets/resume-2.pdf';

function ResumePage() {
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1 className="display-4">My Resume</h1>
          <a href={resumePDF} download="Bryan_Resume.pdf">
            <Button variant="primary" className="mt-3">Download PDF</Button>
          </a>
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <img src={pdf1} alt="Resume Page 1" style={{ width: '100%', marginBottom: '20px' }} />
          <img src={pdf2} alt="Resume Page 2" style={{ width: '100%' }} />
        </Col>
      </Row>
    </Container>
  );
}

export default ResumePage;