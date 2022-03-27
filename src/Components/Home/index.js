import { Col, Container } from 'react-bootstrap';
import Slider from '../Slides/Slider';
import './Home.css';

const Home = ({ greeting }) => {
  return (
    <Container fluid className="mt-5">
      <Container className="p-5">
        {/* PLACEHOLDER WELCOME MESSAGE */}
        <Col className="home-greeting-container d-flex flex-column justify-content-center">
          <h1 className="home-greeting">{greeting}Bienvenido a Somos Mas</h1>
        </Col>
      </Container>
      {/* PLACEHOLDER SLIDER */}
      <Col xs={12}>
        <div className="placeholder-slider d-flex flex-column justify-content-center">
          {/* COMPONENTE SLIDER */}
          <Slider />
        </div>
      </Col>
      <Container className="mt-5">
        <Col
          xs={12}
          className="placeholder-novedades d-flex flex-column justify-content-center"
        >
          <h3>Novedades</h3>
          {/* COMPONENTE NOVEDADES */}
          <p>Novedades placeholder</p>
        </Col>
      </Container>
    </Container>
  );
};
export default Home;
