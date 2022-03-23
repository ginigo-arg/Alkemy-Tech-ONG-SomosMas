import { Col, Container, Row } from 'react-bootstrap';
import Logo from '../../assets/img/LOGO-SOMOS MAS.png';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Container
      fluid
      className="bg-dark footer-container justify-content-evenly p-3 pt-5"
    >
      <Container
        fluid="lg"
        className="d-flex flex-column flex-md-row justify-content-evenly justify-content-md-center border-bottom p-3"
      >
        <Col
          xl={4}
          className="d-none d-xl-flex flex-xl-column justify-content-xl-center align-items-xl-end px-xl-4"
        >
          <p className="footer-title">Otras Campañas</p>
          <a href="..." className="text-decoration-none">
            <p className="footer-socialmedia-text">Campaña 1</p>
          </a>
          <a href="..." className="text-decoration-none">
            <p className="footer-socialmedia-text">Campaña 2</p>
          </a>
          <a href="..." className="text-decoration-none">
            <p className="footer-socialmedia-text">Campaña 3</p>
          </a>
        </Col>
        <Col
          xs={12}
          md={5}
          lg={6}
          xl={4}
          className="footer-logo-container d-flex align-content-center mb-4 m-md-0"
        >
          <img src={Logo} alt="Logo Somos Mas" className="footer-logo" />
        </Col>
        <Col
          xs={12}
          md={5}
          lg={6}
          xl={4}
          className="footer-socialmedia-container d-flex flex-row flex-md-column align-items-center justify-content-center justify-content-md-evenly px-lg-4"
        >
          <Col md={12}>
            <a
              href="..."
              alt="URL de la ONG"
              className="d-none d-md-block d-lg-flex text-decoration-none"
            >
              <p className="footer-title">Somos Más ONG</p>
            </a>
          </Col>
          <Row>
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
                <FaFacebook size={30} color="white" />
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
          </Row>
        </Col>
      </Container>
      <Container className="p-3">
        <h5 className="footer-text">2022 by Alkemy. All Rights Reserved.</h5>
      </Container>
    </Container>
  );
};
export default Footer;
