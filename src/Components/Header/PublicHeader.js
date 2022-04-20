import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import src from '../../assets/img/LOGO-SOMOSMAS.png';

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

export default function PublicHeader () {
  return (
    <>
      <Navbar className='bg-dark'>
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse className="login d-flex flex-direction-row justify-content-end align-items-center">
            <p >Login</p>
            <Link className='text-white my-0 login' to='/login'>Iniciar sesión | Registrarse</Link>Login
          </Navbar.Collapse>
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
}
