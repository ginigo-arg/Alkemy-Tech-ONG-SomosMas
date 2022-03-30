import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TableSliders from './TableSliders';

const Sliders = () => {
  return (
    <Container>
      <div className="sliders-title">
        <h3>LISTADO SLIDERS</h3>
        <Link to="/backoffice/Slides/create">
          <Button className="btn-danger">Crear Slider</Button>
        </Link>
      </div>
      <TableSliders />
    </Container>
  );
};

export default Sliders;
