import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Slider from './Slider';
import Content from './Content';
import Footer from './Footer';

const SchoolCampaign = () => {
  return (
    <Container fluid className="bg-light p-0">
      <Header />
      <Slider />
      <Container>
        <Content />
      </Container>
      <Footer />
    </Container>
  );
};

export default SchoolCampaign;
