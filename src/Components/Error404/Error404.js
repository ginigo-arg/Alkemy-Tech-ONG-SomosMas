import React from 'react';
import './Error404.css';
import SectionTitles from '../SectionTitles/SectionTitles';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Error404 = () => {
  const history = useHistory();

  return (
    <div className="content">
      <SectionTitles title="Ups, parece que esta pagina no funciona" />
      <Button size="sm" className="button" onClick={() => history.goBack()}>
        Volver Atrás
      </Button>
    </div>
  );
};

export default Error404;
