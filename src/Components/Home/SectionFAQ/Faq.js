import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Faq.css';

const Faq = () => {
  return (
    <Container className='py-5'>
      <Row className='py-5 d-flex flex-row justify-content-md-center justify-content-lg-between'>
        <Col xs={12} lg={5}>
          <h2 className='text-white'>
            <strong>
              ¿Aún tiene dudas?
            </strong>
          </h2>
          <p className='my-5 mt-0 text-white'>
            En esta sección contestamos las preguntas que más frecuentemente nos suelen hacer.
          </p>
          <p className='text-md-center text-lg-start text-white'>
            En caso de tener alguna consulta adicional, no dude en contactarnos:
          </p>
          <Row md={6} className='flex-row my-3 m-lg-0 justify-content-md-center justify-content-lg-between'>
            <Col
              xs={3}
              lg={10}
              className="d-flex flex-row justify-content-center justify-content-lg-start text-white"
            >
              <a
                href="mailto:info@somosmas.com.ar"
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope size={20} color="black" />
                <p className="d-none d-lg-inline-block faq-socialmedia-text mx-lg-2 text-white">
                  info@somosmas.com.ar
                </p>
              </a>
            </Col>
            <Col
              xs={3}
              lg={10}
              className="d-flex flex-row justify-content-center justify-content-lg-start"
            >
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook size={20} color="black" />
                <p className="d-none d-lg-inline-block faq-socialmedia-text mx-lg-2 text-white">
                  Facebook
                </p>
              </a>
            </Col>
            <Col
              xs={3}
              lg={10}
              className="d-flex flex-row justify-content-center justify-content-lg-start"
            >
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={20} color="black" />
                <p className="d-none d-lg-inline-block faq-socialmedia-text mx-lg-2 text-white">
                  Instagram
                </p>
              </a>
            </Col>
            <Col
              xs={3}
              lg={10}
              className="d-flex flex-row justify-content-center justify-content-lg-start"
            >
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter size={20} color="black" />
                <p className="d-none d-lg-inline-block faq-socialmedia-text mx-lg-2 text-white">
                  Twitter
                </p>
              </a>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={8} lg={6} className='d-flex flex-lg-column justify-content-lg-center'>
          <Accordion defaultActiveKey={0}>
            <Accordion.Item eventKey={0}>
              <Accordion.Header>¿Por qué donar?</Accordion.Header>
              <Accordion.Body>
                Una pequeña acción para vos, por más insignificante que sea, una gran ayuda para otro.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={1}>
              <Accordion.Header>¿Cómo puedo ayudar?</Accordion.Header>
              <Accordion.Body className='d-flex flex-column'>
                <Col>
                  Ya sea desde juguetes, útiles escolares, o una pequeña suma de dinero, tu aporte es valiosísimo.
                  ¡Involucrate!
                  Gracias a vos, vamos a poder seguir mejorando la infancia de muchísimas chicas y chicos.
                </Col>
                <Col className='d-flex flex-row justify-content-center mt-3'>
                  <Button variant='primary' className='text-white'>
                    {/* <Link to=''> */}
                    Donar
                    {/* </Link> */}
                  </Button>
                </Col>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey={2}>
              <Accordion.Header>¿Cómo puedo ser parte de Somos Más?</Accordion.Header>
              <Accordion.Body className='d-flex flex-column'>
                <Col>
                  Estamos constantemente ampliando nuestro equipo para que más chicas y chicos puedan tener un mejor presente.
                  Si te querés sumar, sentite libre de contactarnos por redes sociales o correo electrónico.
                </Col>
                <Col className='d-flex flex-row justify-content-center mt-3'>
                  <Button variant='info' className='text-white'>
                    <Link to='/contacto'>
                      Sumate
                    </Link>
                  </Button>
                </Col>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};
export default Faq;
