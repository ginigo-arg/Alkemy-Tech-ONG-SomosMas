import React, { useEffect } from 'react';
import Slider from './Slider';
import Content from './Content/Content';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { LOGIN_AUTH_ME_ACTION } from '../../redux/auth/authActions';

const ToysCampaign = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LOGIN_AUTH_ME_ACTION());
  }, []);
  return (
    <>
      <Slider />
      <Content />
      <Footer />
    </>
  );
};

export default ToysCampaign;
