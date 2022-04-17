import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import img1 from '../../assets/img/404.png';

const Error404 = () => {
  const history = useHistory();

  return (
    <Container>
      <Row className='vh-100 d-flex align-items-center'>
        <Col lg={7}>
          <h1 className='fs-1 text-center text-404'>
            <strong>
              Awww... No lo podemos creer            </strong>
          </h1>
          <h5 className='text-center'>
            Es solo un error 404
          </h5>
          <p className='text-center'>
            ¡Lo sentimos! La pagina que busca no existe.
          </p>
          <p className='text-center'>
            <Button className='text-white' onClick={() => history.goBack()}>
              Volver Atrás
            </Button>
          </p>
        </Col>
        <Col lg={5} className='overflor-hidden'>
          <img src={img1} alt='Error 404' width='100%'/>
        </Col>
      </Row>

    </Container>
  );
};

export default Error404;
