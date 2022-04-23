import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import logoOng from '../../assets/img/logo/ONG/logo.png';
// import logoCampaigns from '../../assets/img/logo/campaigns/school/logo.png';
import ContactInformation from '../../Components/Contact/ContactInformation';
// import './LandingHeader.css';
const Header = () => {
  // const styleImg = {
  //   width: '150px',
  //   height: '80px',
  // };

  return (
    <>
      {/* <Navbar fixed="top" expand="sm" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img className="logoOng" src={logoOng} alt="" />
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <img className="tumbnaild" style={styleImg} src={logoCampaigns} alt="" />
          </Navbar.Brand>
          <div className="row">
            <h5>Eslogan de campaña</h5>
          </div>
        </Container>
      </Navbar> */}
      <Navbar bg="black" expand="lg" className='text-primary'>
        <Container>
          <Navbar.Brand href="#home"><img
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='bg-black p-2 pt-3' style={{ color: 'whitesmoke !important' }}>
        <ContactInformation minimalistVersion = {true} bgClassIcon='bg-primary' textColorBody='text-white' />
      </div>
    </>
  );
};

export default Header;
