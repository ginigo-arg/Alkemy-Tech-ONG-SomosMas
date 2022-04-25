import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import img1 from '../../assets/img/gracias.jpg';

const Thanks = () => {
  return (
    <Container>
      <Row className='vh-100 d-flex align-items-center'>
        <Col lg={7}>
          <h1 className='fs-1 text-center text-404'>
            <strong>
              ¡Gracias!
            </strong>
          </h1>
          <h5 className='text-center'>
            Esta simple accion ayuda a cientos de niños
          </h5>
          <p className='text-center'>
            <Link to="/">
              <Button variant="info text-white">Ir al inicio</Button>
            </Link>
          </p>
        </Col>
        <Col lg={5} className='overflor-hidden'>
          <img src={img1} alt='Error 404' width='100%'/>
        </Col>
      </Row>

    </Container>
  );
};

export default Thanks;
