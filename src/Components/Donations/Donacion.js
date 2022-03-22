import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const Donacion = (props) => {
  return (
    <Container className="d-flex flex-direction-column align-items-center vh-100">
      <Row>
        <Col xs={12}>
          <h2 className="text-center">{props.title}</h2>
          <p className="text-center px-4">{props.text}</p>
        </Col>
        <Col xs={12} className="d-flex justify-content-center">
          {/* se agregara el redireccionamiento/funcionamiento mas adelante */}
          <Button variant="info">Donar</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Donacion;
