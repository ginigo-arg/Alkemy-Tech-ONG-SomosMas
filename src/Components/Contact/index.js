import React, { useEffect } from 'react';
import SectionTitles from '../SectionTitles/SectionTitles';
import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';
import ContactMap from './ContactMap';
import SocialMedia from './SocialMedia';
import banner from '../../assets/img/banner/banner-contact.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Liston from './Liston';
import { useDispatch } from 'react-redux';
import { LOGIN_AUTH_ME_ACTION } from '../../redux/auth/authActions';

const IndexContact = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LOGIN_AUTH_ME_ACTION());
  }, []);

  return (
    <>
      {/* Zona Section Title */}
      <div className="d-block d-sm-block d-md-none">
        <SectionTitles title={'Contacto'} description="Estamos aquí para ti, utiliza cualquiera de nuestros medios de contacto." backgroundImg={banner} />
      </div>
      {/* Zona Google Map */}
      <div className="bg-secondary d-none d-sm-none d-md-block h-map">
        <ContactMap />
      </div>
      {/* Zona description */}
      <Container className="bg-white" fluid>
        <Liston />
        <div className='d-none d-sm-none d-md-block'>
          <div className="text-center margin-auto fs-5" style={{ minHeight: '40px' }}>
            Estamos aquí para ti, utiliza cualquiera de nuestros medios de contacto.
          </div>
          <Liston />
        </div>
      </Container>
      {/* Zona contacto */}
      <Container className="bg-white">
        <Row className='bg-white'>
          {/* <Col
            md={12}
            className="d-none d-sm-none d-md-block d-flex justify-content-center align-items-center mb-2"
          >
            <ContactMap />
          </Col> */}
          <div id="contactOng" className="mb-22">
            <ContactInformation sizeIcon={60} fontSizeIcon='fs-1' />
          </div>
          <div>
            <h5 className="text-black">Escríbenos</h5>
          </div>
          <Col md={8}>
            <Row>
              <Col md={12}>
                <ContactForm />
              </Col>
            </Row>
          </Col>
          <Col md={4} className="d-none d-sm-none d-md-block bg-transparent">
            <div id="socialMedia" className="mb-2">Nuestras redes sociales
              <SocialMedia layoutVertical={true} showTitle={true} />
            </div>
          </Col>
          <Col
            md={4}
            className="d-block d-sm-block d-md-none"
          >
            <div id="socialMediaMovile" className="mb-2 d-flex justify-content-center align-items-center">
              <SocialMedia layoutVertical={false} showTitle={false} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IndexContact;
