import { Container, Row, Col } from 'react-bootstrap';
import Partner1 from '../../../assets/img/Partners/logo-contra-marcas.svg';
import Partner2 from '../../../assets/img/Partners/logo-flow-mission.svg';
import Partner3 from '../../../assets/img/Partners/logo-insany.svg';
import Partner4 from '../../../assets/img/Partners/logo-studio-martins.svg';
import './partners.css';

const Partners = () => {
  return (
    <Container className='py-5'>
      <Row className='w-100 py-5 bg-gray-400'>
        <Col lg={4}>
          <h2 className='text-primary'>
            <strong>
              Las empresas que apoyan nuestra causa
            </strong>
          </h2>
        </Col>
        <Col lg={3}>
        </Col>
        <Col>
          <p className='text-partner'>
            Sabemos que todos los proyectos generan costos para existir y los nuestros no son diferentes. Con eso en mente, estamos buscando grandes empresas que hayan abrazado nuestra causa y nos hayan ayudado en este viaje. Estamos muy agradecidos con las empresas a continuación y con todos los demás que deseen ser parte de nuestra historia. ¿Quieres apoyar también?
          </p>
        </Col>
      </Row>
      <Row className='d-flex justify-content-between align-items-center px-5 bg-gray-600 w-100 partners mb-5'>
        <ul className='d-flex flex-wrap flex-direction-row justify-content-center align-items-center overflow-hidden w-100'>
          <li className='px-5 py-5 border-start border-end overflow-hidden'>
            <img src={Partner1} alt="partner1"/>
          </li>
          <li className='px-5 py-5 border-end text-decoration-none overflow-hidden'>
            <img src={Partner2} alt="partner1"/>
          </li>
          <li className='px-5 py-5 border-end overflow-hidden'>
            <img src={Partner3} alt="partner1"/>
          </li>
          <li className='px-5 py-5 border-end overflow-hidden'>
            <img src={Partner4} alt="partner1"/>
          </li>
        </ul>
      </Row>
    </Container>
  );
};
export default Partners;
