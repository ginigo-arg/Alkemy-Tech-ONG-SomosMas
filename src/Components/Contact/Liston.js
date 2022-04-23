import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Liston = () => {
  return (
    <Container fluid className="p-0">
      <Row className='mb-2'>
        <Col className='bg-primary' style={{ height: '7px' }}></Col>
        <Col className='bg-warning' style={{ height: '7px' }}></Col>
        <Col className='bg-info' style={{ height: '7px' }}></Col>
      </Row>
    </Container>
  );
};
export default Liston;
