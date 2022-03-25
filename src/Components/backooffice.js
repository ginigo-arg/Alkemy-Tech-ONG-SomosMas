import { useLocation, BrowserRouter as Router, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Backooffice = () => {
  let location = useLocation();
  console.log(location);

  return (
    <>
      <Container>
        <div>backooffice</div>
      </Container>
      <Container>
        <Row>
          <Router>
            <Col>
              Componente Sidebar
              <p>
                <Link to="/backoffice/create-activity">Crear actividades</Link>
              </p>
            </Col>
          </Router>
        </Row>
      </Container>
    </>
  );
};
export default Backooffice;
