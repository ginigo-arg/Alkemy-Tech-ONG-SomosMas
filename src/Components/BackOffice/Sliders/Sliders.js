import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import TableSliders from './TableSliders';

import './Sliders.css';
;

const Sliders = () => {
  const history = useHistory();
  const CreateSlider = (e) => {
    history.push({
      pathname: '/backoffice/slides/create',
      state: { detail: 'crear' },
    });
  };

  return (
    <Container>
      <div className="sliders-title">
        <h3>LISTADO SLIDERS</h3>

        <Button className="btn-danger" onClick = { CreateSlider }>Crear Slider</Button>

      </div>
      <TableSliders />
    </Container>
  );
};

export default Sliders;
