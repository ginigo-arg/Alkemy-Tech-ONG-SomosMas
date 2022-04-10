import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import React from 'react';
import Logo from '../../assets/img/LOGO-SOMOSMAS.png';
import './PublicHeader.css';

const PublicHeader = () => {
  const navi = [
    { to: '/', title: 'Inicio' },
    { to: '/nosotros', title: 'Nosotros' },
    { to: '/novedades', title: 'Novedades' },
    { to: '/actividades', title: 'Actividades' },
    { to: '/contacto', title: 'Contacto' },
  ];

  let id2 = window.location.pathname;
  const Login = 'no';

  if (id2 === '/') {
    id2 = '/inicio';
  }
  id2 = id2.replace('/', '');

  return (
    <>
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="sm"
        bg="light"
        activeKey={id2}
        className="shadow"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} width="55%" alt="Logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {' '}
            <Nav className="ms-auto" activeKey={id2}>
              {navi.length
                ? navi.map((linke) => (
                  <Nav.Link
                    eventKey={linke.title.toLowerCase()}
                    href={linke.to}
                    key={linke.title.toLowerCase()}
                  >
                    {linke.title}
                  </Nav.Link>
                ))
                : 'No hay menu'}

              <NavDropdown title="Campañas" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#">Escuela</NavDropdown.Item>
                <NavDropdown.Item href="#">Juguetes</NavDropdown.Item>
              </NavDropdown>

              {Login === 'no'
                ? (
                  <Nav.Link href="#" className="login">
                    Login
                  </Nav.Link>
                )
                : (
                  'Perfil'
                )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default PublicHeader;
