import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link, useLocation } from 'react-router-dom';
import src from '../../assets/img/LOGO-SOMOSMAS.png';
import { LOGOUT_USER_ACTION } from '../../redux/auth/authActions';
import { alertService } from '../../Services/alertService';
import './PublicHeader.css';

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
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  return (
    <>
      <Navbar className='bg-dark'>
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse className="d-flex flex-direction-row justify-content-end align-items-center">
            {auth.auth === true
              ? <> <p className='text-white my-0 mx-4'>{`Bienvenido ${auth.user}`}</p>
                <p className='text-white my-0 header-logout' onClick={() => dispatch(LOGOUT_USER_ACTION())}>Cerrar sesión</p> </>
              : <Link className='text-white my-0' to='/login'>Iniciar sesión | Registrarse</Link>}
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
              <Button className='btn btn-primary text-white' onClick={() => auth.auth ? useLocation.push('/donar') : alertService('error', 'Debe iniciar sesión para poder donar.')}>
                Donar
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
