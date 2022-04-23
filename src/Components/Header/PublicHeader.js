import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import src from '../../assets/img/LOGO-SOMOSMAS.png';
import ContactInformation from '../../Components/Contact/ContactInformation';
import SocialMedia from '../../Components/Contact/SocialMedia';
import ParserHtml from '../Parser/Parser';

const sites = [
  {
    id: 0,
    site: 'Inicio',
    url: '/',
  },
  {
    id: 1,
    site: 'Nosotros',
    url: '/nosotros',
  },
  {
    id: 2,
    site: 'Novedades',
    url: '/novedades',
  },
  {
    id: 3,
    site: 'Actividades',
    url: '/actividades',
  },
  {
    id: 4,
    site: 'Contacto',
    url: '/contacto',
  },

];

const PublicHeader = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <div className='d-flex justify-content-center align-items-center text-white text-center' key={'point1'}>
            <Pointer sizePoint={40} description='O' />
            <Pointer sizePoint={40} bgColor='bg-warning' description='N' />
            <Pointer sizePoint={40} bgColor='bg-info' description='G' />
          </div>
          <Navbar.Toggle />
          <Navbar.Collapse className="login d-flex flex-direction-row justify-content-start align-items-center">
            <p >Login</p>
            <Link className='text-white my-0 login fs-5' to='/login'>Iniciar sesión | Registrarse</Link>
          </Navbar.Collapse>
          <div className='d-none d-sm-none d-md-block d-flex justify-content-center align-items-center text-white text-center mt-2' key={'point1'}>
            <ContactInformation showVisitUs={false} showSendUsMail={false}minimalistVersion={true} bgClassIcon='bg-primary'
              textColorBody='text-white fs-5' />
          </div>
          <div className="d-none d-sm-none d-md-block">
            <SocialMedia layoutVertical={false} showTitle={false} clsBorder='border-0' p0={true} />
          </div>
        </Container>
      </Navbar>
      <Navbar bg="light" variant="light" collapseOnSelect sticky="top" expand="sm" className='shadow'>
        <Container>
          <Navbar.Brand style={{ cursor: 'pointer' }}>
            <Link to="/">
              <img
                className="w-50"
                src={src}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              {sites.map((site) => (
                <NavLink key={site.id} to={site.url} className="nav-link me-3">
                  {site.site}
                </NavLink>
              ))}
              <NavDropdown title="Campañas" id="navbarScrollingDropdown" className='me-3'>
                <NavLink to="/campaign/toys" className="dropdown-item" >
                  Juguetes
                </NavLink>
                <NavLink to="/campaign/school" className="dropdown-item">
                  Escuelas
                </NavLink>

              </NavDropdown>
              <Button className='btn btn-primary text-white'>
                Donar
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

const Pointer = ({ bgColor = 'bg-primary', sizePoint = 40, description = '' }) => {
  const stylePointer = {
    height: sizePoint + 'px',
    width: sizePoint + 'px',
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className={`${bgColor} rounded-pill m-1 pt-2 text-center align-middle`} style = {stylePointer}>
          <ParserHtml text={description} />
        </div>
      </div>
    </>
  );
};

export default PublicHeader;
