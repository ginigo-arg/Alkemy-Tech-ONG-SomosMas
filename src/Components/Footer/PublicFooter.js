import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitterSquare } from 'react-icons/fa';
import Logo from '../../assets/img/somos-mas-public.png';

const PublicFooter = () => {
  const navigation = [
    { to: '/', title: 'Inicio' },
    { to: '/nosotros', title: 'Nosotros' },
    { to: '/novedades', title: 'Novedades' },
    { to: '/actividades', title: 'Actividades' },
    { to: '/contacto', title: 'Contacto' },
  ];

  return (
    <footer className="bg-dark navbar-dark">
      <Container className="d-flex flex-wrap justify-content-center">
        <Navbar.Brand>
          <img src={Logo} width="100" className="mt-3" alt="Logo SOMOS MÁS" />
        </Navbar.Brand>
        <Navbar className="w-100 d-none d-lg-flex justify-content-center">
          <Nav>
            {navigation.map((item) => (
              <NavLink key={item.title} to={item.to} className="nav-link">
                {item.title}
              </NavLink>
            ))}
          </Nav>
        </Navbar>
        <Nav className="w-100 py-2 justify-content-center">
          <a href="/#" className="text-muted mx-3">
            <FaFacebook />
          </a>
          <a href="/#" className="text-muted mx-3">
            <FaInstagram />
          </a>
          <a href="/#" className="text-muted mx-3">
            <FaTwitterSquare />
          </a>
        </Nav>
        <hr className="w-100 my-0 d-inline-block" />
        <p className="my-3 text-muted">
          <small>By Reactors © Copyright 2022 | All Rights Reserved.</small>
        </p>
      </Container>
    </footer>
  );
};

export default PublicFooter;
