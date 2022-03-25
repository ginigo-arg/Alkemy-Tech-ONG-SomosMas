import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Link, useLocation } from 'react-router-dom';

const LayoutBackoffice = ({ children }) => {
  // const location = useLocation();
  // console.log(location);

  return (
    <>
      <BrowserRouter>
        <Container>
          <header>COMPONENT HEADER</header>
        </Container>
        <Container fluid className="container-fluid vh-100 border border-2">
          <Row>
            <Col md={2} className="bg-primary vh-100 text-white">
              Componente sidebar
              <p>
                <Link to="/backoffice/create-category" className="text-white">
                  Crear categoria
                </Link>
              </p>
              <p>
                <Link to="/backoffice/create-activity" className="text-white">
                  Crear activity
                </Link>
              </p>
              <p>
                <Link to="/backoffice/create-news" className="text-white">
                  Crear new
                </Link>
              </p>
            </Col>
            <Col md={10}>{children}Switch Routes</Col>
          </Row>
        </Container>
      </BrowserRouter>
    </>
  );
};
export default LayoutBackoffice;
