import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import Logo from '../../../assets/img/LOGO-SOMOSMAS.png';

const Header = () => {
  return (
    <Navbar bg="light" expand={false}>
      <Container fluid>
        <Container className="d-flex justify-content-between">
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Brand>
            {' '}
            <img src={Logo} width="50%" alt="Logo Somos Mas"></img>
          </Navbar.Brand>
        </Container>
        <Sidebar />
      </Container>
    </Navbar>
  );
};

export default Header;
