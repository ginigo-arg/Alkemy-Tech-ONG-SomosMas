import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Gracias = () => {
  return (
    <Container className="d-flex flex-direction-column align-items-center vh-100">
      <Row>
        <Col xs={12}>
          <h2 className="text-center">Gracias</h2>
          <p className="text-center px-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit massa quis
            molestie vestibulum, aliquam penatibus tdwawdaciti tincidunt
            suspendisse leo dui eu conubia. Id proin magnis facilisi tellus
          </p>
        </Col>
        <Col xs={12} className="d-flex justify-content-center">
          <Link to="/">
            <Button variant="info">Ir al inicio</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Gracias;
