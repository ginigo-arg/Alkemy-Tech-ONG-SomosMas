import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Logo from '../../assets/img/LOGO-SOMOSMAS.png';
import logotoys from '../../assets/img/Logotipo campaña juguetes.png';
import './LandingHeader.css';
const LandingHeader = () => {
  return (
    <>
      <Navbar fixed="top" expand="sm" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img className="logoOng" src={Logo} width="50%" alt="" />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <img className="logotoys" src={logotoys} width="20%" alt="" />
          </Navbar.Brand>
          <div className="row">
            <h5>Eslogan de campaña</h5>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default LandingHeader;
