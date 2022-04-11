import { Col, Container } from 'react-bootstrap';
import Skeleton from '../Skeleton/Skeleton';
import './Home.css';
import Slider from '../Slides/Slider';
import ProgressSpinner from '../Progress/ProgressSpinner';

const Home = ({ greeting }) => {
  return (
    <Container fluid className="mt-5">
      <Container className="p-5">
        {/* PLACEHOLDER WELCOME MESSAGE */}
        <Col className="home-greeting-container d-flex flex-column justify-content-center">
          <h1 className="home-greeting">{greeting}Bienvenido a Somos Mas</h1>
        </Col>
      </Container>
      <Col xs={12}>
        <div className="placeholder-slider d-flex flex-column justify-content-center">
          {/* COMPONENTE SLIDER */}
          <Slider />
        </div>
      </Col>
      <Container className="mt-5">
        <Col
          xs={12}
          className="placeholder-novedades d-flex flex-column justify-content-center align-items-center"
        >
          <h3>Novedades</h3>
          {/* COMPONENTE NOVEDADES */}
          {/* EJEMPLO DE PLACEHOLDER */}
          <Skeleton />
        </Col>
      </Container>
      <Container className="mt-5">
        <Col
          xs={12}
          className="placeholder-novedades d-flex flex-column justify-content-center align-items-center"
        >
          <h3>Setup Progress</h3>
          {/* COMPONENTE NOVEDADES */}
          {/* EJEMPLO DE PLACEHOLDER */}
          <ProgressSpinner />
        </Col>
      </Container>
    </Container>
  );
};
export default Home;
