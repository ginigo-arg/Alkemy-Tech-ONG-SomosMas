import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT_USER_ACTION } from '../../redux/auth/authActions';
import './PublicHeader.css';
import Logo from '../../assets/img/LOGO-SOMOSMAS.png';

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
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const history = useHistory();
  const token = localStorage.getItem('TOKEN');

  return (
    <>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="md" className='shadow' >
        {auth.auth || token
          ? <Container className='d-flex flex-row justify-content-between'>
            {auth.user
              ? <Button className='header-button btn-warning text-top-header' onClick={() => history.push('/backoffice')}>Escritorio</Button>
              : <Button className='btn btn-warning fs-6' disabled>Escritorio</Button>}
            <Container className='d-flex flex-row justify-content-end '>
              <p className='text-white my-0 mx-lg-4 d-none d-md-flex  text-top-header'>{`Bienvenido ${auth.user.name}`}</p>
              <p className='text-white my-0 header-logout text-decoration-underline  text-top-header' onClick={() => dispatch(LOGOUT_USER_ACTION())}>Cerrar sesión</p>
            </Container>
          </Container>
          : <Container className='d-flex flex-row justify-content-end'>
            <Link className='text-white my-0 header-text fs-6 text-top-header' to='/login'>Iniciar sesión | Registrarse</Link>
          </Container>}
      </Navbar>

      <Navbar bg="light" variant="light" collapseOnSelect sticky="top" expand="sm" className='shadow'>
        <Container>
          <Navbar.Brand style={{ cursor: 'pointer' }}>
            <Link to="/">
              <img
                className="w-50"
                src={Logo}
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
              <Button className='btn btn-primary text-white' onClick={() => auth.auth ? location.push('/donar') : location.push('/login')}>
                Donar
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default PublicHeader;
