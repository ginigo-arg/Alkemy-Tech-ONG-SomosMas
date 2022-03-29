import React from 'react';
import { Navbar, Offcanvas, Nav } from 'react-bootstrap';
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
            <Nav.Link href="/backoffice/create-news">
              <BiNews font-size="25px" color="grey" />
              Novedades
            </Nav.Link>

            <Nav.Link href="/backoffice/create-activity">
              <BsPencilFill font-size="25px" color="red" />
              Actividades
            </Nav.Link>
            <Nav.Link href="/backoffice/create-category">
              <BsMenuButtonWideFill font-size="25px" color="green" />
              Categorias
            </Nav.Link>
            <Nav.Link href="/backoffice/create-testimonials">
              <MdOutlineSpeakerNotes font-size="25px" color="blue" />
              Testimonios
            </Nav.Link>
            <Nav.Link href="/backoffice/">
              <GiOrganigram font-size="25px" color="black" />
              Organizacion
            </Nav.Link>
            <Nav.Link href="/backoffice/create-slide">
              <RiSlideshow3Line font-size="25px" color="black" />
              Slides
            </Nav.Link>
            <Nav.Link href="/backoffice/create-user">
              <FaUserCircle font-size="25px" color="orange" />
              Usuarios
            </Nav.Link>
            <Nav.Link href="/backoffice/create-member">
              <HiUsers font-size="25px" color="violet" />
              Miembros
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </div>
  );
};

export default Sidebar;
