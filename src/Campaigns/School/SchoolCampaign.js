import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { LOGIN_AUTH_ME_ACTION } from '../../redux/auth/authActions';
import { useDispatch } from 'react-redux';
import Slider from './Slider';
import Content from './Content';
import Footer from './Footer';

const SchoolCampaign = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LOGIN_AUTH_ME_ACTION());
  }, []);
  return (
    <Container fluid className="bg-light p-0">
      <Slider />
      <Container>
        <Content />
      </Container>
      <Footer />
    </Container>
  );
};

export default SchoolCampaign;
