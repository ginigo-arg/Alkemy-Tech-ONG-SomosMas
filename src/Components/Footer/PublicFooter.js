import { Nav, Navbar, Container } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitterSquare } from 'react-icons/fa';
import Logo from '../../assets/img/LOGO-SOMOSMAS.png';

const PublicFooter = () => {
  const navigation = [
    { to: '/', title: 'Inicio' },
    { to: '/nosotros', title: 'Nosotros' },
    { to: '/novedades', title: 'Novedades' },
    { to: '/actividades', title: 'Actividades' },
    { to: '/contacto', title: 'Contacto' },
  ];

  return (
    <footer className="bg-light">
      <Container>
        <Navbar.Brand>
          <img src={Logo} width="100" className="mt-3" alt="Logo SOMOS MÁS" />
        </Navbar.Brand>
        <Navbar className="d-none d-lg-flex justify-content-center">
          <Nav>
            {navigation.map((item) => (
              <Nav.Link href={item.to} key={item.title}>
                {item.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar>
        <Nav className="justify-content-center">
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
        <hr className="my-0 w-50 d-inline-block" />
        <p className="my-3 text-muted">2022 by Alkemy. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default PublicFooter;
