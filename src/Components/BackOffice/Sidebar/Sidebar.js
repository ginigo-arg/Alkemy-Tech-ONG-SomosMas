import React from 'react';
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import { BiNews } from 'react-icons/bi';
import { BsPencilFill, BsMenuButtonWideFill } from 'react-icons/bs';
import { MdOutlineSpeakerNotes } from 'react-icons/md';
import { GiOrganigram } from 'react-icons/gi';
import { RiSlideshow3Line } from 'react-icons/ri';
import { HiUsers } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
const Sidebar = () => {
  return (
    <div>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className="float-start"
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 ">
                <Nav.Link href="#action1">
                  <BiNews font-size="25px" color="grey" />
                  Novedades
                </Nav.Link>

                <Nav.Link href="#action2">
                  <BsPencilFill font-size="25px" color="red" />
                  Actividades
                </Nav.Link>
                <Nav.Link href="#action3">
                  <BsMenuButtonWideFill font-size="25px" color="green" />
                  Categorias
                </Nav.Link>
                <Nav.Link href="#action4">
                  <MdOutlineSpeakerNotes font-size="25px" color="blue" />
                  Testimonios
                </Nav.Link>
                <Nav.Link href="#action5">
                  <GiOrganigram font-size="25px" color="black" />
                  Organizacion
                </Nav.Link>
                <Nav.Link href="#action5">
                  <RiSlideshow3Line font-size="25px" color="black" />
                  Slides
                </Nav.Link>
                <Nav.Link href="#action5">
                  <FaUserCircle font-size="25px" color="orange" />
                  Usuarios
                </Nav.Link>
                <Nav.Link href="#action5">
                  <HiUsers font-size="25px" color="violet" />
                  Miembros
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Sidebar;
