import { Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './layoutbackoffice.css';

const LayoutBackoffice = ({ children }) => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <Container
        fluid
        className="bg-dark h-50 container-header-backoffice mt-5"
      >
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
          <Col md={10}>{children}</Col>
        </Row>
      </Container>
    </>
  );
};
export default LayoutBackoffice;
