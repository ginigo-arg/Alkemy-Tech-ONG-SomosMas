import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../../assets/img/LOGO-SOMOSMAS.png';

export default function PublicHeader() {
  const navi = [
    { to: '/', title: 'Inicio' },
    { to: '/nosotros', title: 'Nosotros' },
    { to: '/contacto', title: 'Contacto' },
    { to: '/actividades', title: 'Actividades' },
  ];
  return (
    <>
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="sm"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} width="50%"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {' '}
            <Nav className="ms-auto">
              {navi.length
                ? navi.map((linke) => (
                    <Nav.Link href={linke.to} key={linke.title}>
                      {' '}
                      {linke.title}
                    </Nav.Link>
                  ))
                : 'No hay menu'}
            </Nav>{' '}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
