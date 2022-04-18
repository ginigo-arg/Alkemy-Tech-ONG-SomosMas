import { Container, Row, Col, Accordion } from 'react-bootstrap';
const Faq = () => {
  return (
    <Container className='py-5'>
      <Row className='py-5'>
        <Col>
          <h2>
            <strong>
              ¿Aun tiene dudas?
            </strong>
          </h2>
          <p>
            Hemos seleccionado y respondido algunas de las principales preguntas que recibimos aquí en nuestras Preguntas Frecuentes.
          </p>
          <p className='mb-0 pb-0'>
            Si tienes dudas:
          </p>
          <p>
            <a>
              <strong>
                info@somosmas.com.ar
              </strong>
            </a>
          </p>
        </Col>
        <Col lg={1}>
        </Col>
        <Col>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};
export default Faq;
