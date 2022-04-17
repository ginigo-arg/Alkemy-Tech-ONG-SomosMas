import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import src from '../../assets/img/logo.png';

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
      <Navbar bg="dark" variant="dark" collapseOnSelect sticky="top" expand="sm">
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
                <NavLink key={site.id} to={site.url} className="nav-link">
                  {site.site}
                </NavLink>
              ))}
              <NavDropdown title="Campañas" id="navbarScrollingDropdown">
                <NavLink to="/campaign/toys" className="dropdown-item" >
                  Juguetes
                </NavLink>
                <NavLink to="/campaign/schools" className="dropdown-item">
                  Escuelas
                </NavLink>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
