import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logoOng from '../../assets/img/logo/ONG/logo.png';
import logoCampaigns from '../../assets/img/logo/campaigns/school/logo.png';
// import ContactInformation from '../../Components/Contact/ContactInformation';
// import './LandingHeader.css';
const Header = () => {
  const styleImg = {
    width: '150px',
    height: '80px',
  };

  return (
    <>
      <Navbar fixed="top" expand="sm" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#/">
            <img className="logoOng" src={logoOng} alt="" />
          </Navbar.Brand>
          <Navbar.Brand href="#/">
            <img className="tumbnaild" style={styleImg} src={logoCampaigns} alt="" />
          </Navbar.Brand>
          <div className="row">
            <h5>Eslogan de campaña</h5>
          </div>
        </Container>
      </Navbar>
      {/* <div className='bg-black'>
        <Container>
          <div className='bg-black p-2 pt-3' style={{ color: 'whitesmoke !important' }}>
            <ContactInformation minimalistVersion = {true} showVisitUs={false} bgClassIcon='bg-primary' textColorBody='text-white' colorLink='text-white' />
          </div>
        </Container>
      </div> */}
    </>
  );
};

export default Header;
