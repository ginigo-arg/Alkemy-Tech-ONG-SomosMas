import { Container, Row, Col, Button } from 'react-bootstrap';
import CounterDown from '../CounterDown/CounterDown';
import './content.css';
import ImgDecoration from '../../../assets/img/donation-toys.jpg';
import Img11 from '../../../assets/img/Foto11.jpg';
import Img3 from '../../../assets/img/Foto3.jpg';
import Img10 from '../../../assets/img/Foto10.jpg';
import Img5 from '../../../assets/img/Manos10.jpg';

const Content = () => {
  const fecha = 'April 25, 2022 18:00:00';
  return (
    <>
      <Container
        fluid
        className="background-content d-flex flex-column align-items-center pt-5"
      >
        <Row className="w-75">
          <Col sm={12} md={6} className="main-text my-auto">
            <h2 className="text-primary mt-5 mb-4">Se parte</h2>
            <p className="lh-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              nulla inventore. Obcaecati aut doloribus libero explicabo
              voluptatem expedita ullam placeat iusto nemo veniam minus enim
              mollitia, sint error eaque voluptate.
            </p>
          </Col>
          <Col sm={12} md={6} className="text-md-center img-portada">
            <img
              src={ImgDecoration}
              width="350"
              heiht="250"
              alt="donar pone feliz a nuestros niños"
              className="shadow rounded-3"
            />
          </Col>
        </Row>

        <Row className="rounded shadow p-4 my-5 w-75 bg-white">
          <Col sm={12} md={6}>
            <h3 className="text-primary mb-4">¿Como apoyar?</h3>
            <p className="lh-lg">
              <strong>
                Apoyando esta causa ayudas a más de 340 niños/niñas
              </strong>
              . Lo podes hacer enviando juguetes nuevos ó usados
              <strong> (en buen estado)</strong> a nuestras oficinas más
              cercanas, ó bien compartiendo esta dirección con tus amigos para
              que más personas puedan saber de esta hermosa causa.
            </p>
          </Col>
          <Col sm={12} md={6}>
            <h3 className="text-primary mb-4">¿Hasta cuando puedo apoyar?</h3>
            <p className="lh-lg">
              <strong>Lo podes hacer antes que termine la campaña</strong>. La
              campaña termina el dia
              <strong> Lunes 04 de abril de 2022</strong>. No pierdas tiempo,
              vos tambien podes ser parte de esta gran accion.
            </p>
          </Col>

          <Col sm={12} className="d-flex justify-content-center">
            <a
              href="https://api.whatsapp.com/send?text=https://github.com/alkemyTech/OT163-React-client"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="primary" className="text-white py-2 px-4">
                Compartir
              </Button>
            </a>
          </Col>
        </Row>

        <Row className="d-none d-md-block w-75">
          <CounterDown date={fecha}/>
        </Row>

        <Row className="d-none d-md-flex mb-5">
          <Col>
            <img
              src={Img10}
              width="250"
              heiht="250"
              alt="donar pone feliz a nuestros niños"
              className="shadow rounded-3 shadow"
            />
          </Col>
          <Col>
            <img
              src={Img11}
              width="250"
              heiht="250"
              alt="donar pone feliz a nuestros niños"
              className="shadow rounded-3 shadow"
            />
          </Col>
          <Col>
            <img
              src={Img3}
              width="250"
              heiht="250"
              alt="donar pone feliz a nuestros niños"
              className="shadow rounded-3 shadow"
            />
          </Col>
          <Col>
            <img
              src={Img5}
              width="250"
              heiht="250"
              alt="donar pone feliz a nuestros niños"
              className="shadow rounded-3 shadow"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Content;
