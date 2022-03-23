import React from 'react';
import SectionTitles from '../SectionTitles/SectionTitles';
import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';
import ContactMap from './ContactMap';
import SocialMedia from './SocialMedia';
import banner from '../../assets/img/banner/banner-contact.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const IndexContact = () => {
  return (
    <>
      <SectionTitles title={'Contacto'} backgroundImg={banner} />
      <Container className="mt-3">
        <Row>
          <Col md={12} className="mb-3">
            <h5>
              Estamos aquí para ti, utiliza cualquiera de nuestros medios de
              contacto.
            </h5>
          </Col>

          <div id="contactOng" className="mb-2">
            <ContactInformation />
          </div>
          <Col
            md={12}
            className="d-none d-sm-none d-md-block d-flex justify-content-center align-items-center"
          >
            <ContactMap />
          </Col>
          <h5 className="text-secondary mt-2">Escríbenos</h5>
          <Col md={8}>
            <Row>
              <Col md={12}>
                <ContactForm />
              </Col>
            </Row>
          </Col>
          <Col md={4} className="d-none d-sm-none d-md-block">
            <div id="socialMedia" className="mb-2">
              <SocialMedia layoutVertical={true} showTitle={true} />
            </div>
          </Col>
          <Col
            md={4}
            className="d-block d-sm-block d-md-none d-flex justify-content-center"
          >
            <div id="socialMedia" className="mb-2">
              <SocialMedia layoutVertical={false} showTitle={false} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default IndexContact;
