import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Faq = () => {
  return (
    <Container className='py-5'>
      <Row className='py-5 d-flex justify-content-between'>
        <Col xs={12} lg={5}>
          <h2>
            ¿Aún tiene dudas?
          </h2>
          <p className='my-5 mt-0'>
            Tomamos las preguntas más frecuentes que nos suelen efectuar y las contestamos a la derecha
          </p>
          <p>
            En caso de tener alguna consulta adicional, no dude en contactarnos:
          </p>
          <Col
            xs={4}
            lg={10}
            className="d-lg-flex flex-lg-row justify-content-lg-start"
          >
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope size={30} color="white" />
              <p className="d-none d-lg-inline-block footer-socialmedia-text">
                info@somosmas.com.ar
              </p>
            </a>
          </Col>
          <Col
            xs={4}
            lg={10}
            className="d-lg-flex flex-lg-row justify-content-lg-start"
          >
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook size={30} color="black" />
              <p className="d-none d-lg-inline-block footer-socialmedia-text">
                Facebook
              </p>
            </a>
          </Col>
          <Col
            xs={4}
            lg={10}
            className="d-lg-flex flex-lg-row justify-content-lg-start"
          >
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={30} color="white" />
              <p className="d-none d-lg-inline-block footer-socialmedia-text">
                Instagram
              </p>
            </a>
          </Col>
          <Col
            xs={4}
            lg={10}
            className="d-lg-flex flex-lg-row justify-content-lg-start"
          >
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={30} color="white" />
              <p className="d-none d-lg-inline-block footer-socialmedia-text">
                Twitter
              </p>
            </a>
          </Col>
        </Col>
        <Col xs={12} lg={5}>
          <Accordion defaultActiveKey={0}>
            <Accordion.Item eventKey={0}>
              <Accordion.Header>¿Por qué donar?</Accordion.Header>
              <Accordion.Body>
                Explicación institucional de por que es necesaria la donación
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>¿Cómo puedo ayudar?</Accordion.Header>
              <Accordion.Body>
                Explicación, opciones de donaciones (dinero, juguetes, útiles escolares, etc) y/o link a donaciones
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>¿Cómo puedo unirme a Somos Más?</Accordion.Header>
              <Accordion.Body>
                Explicación de como unirse a la organización y empezar a fomar parte
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};
export default Faq;
