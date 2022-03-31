import React from 'react';
import { Navbar, Offcanvas, Nav } from 'react-bootstrap';
import { BiNews } from 'react-icons/bi';
import { BsPencilFill, BsMenuButtonWideFill } from 'react-icons/bs';
import { MdOutlineSpeakerNotes } from 'react-icons/md';
import { GiOrganigram } from 'react-icons/gi';
import { RiSlideshow3Line } from 'react-icons/ri';
import { HiUsers } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
            <Link to="/backoffice/create-news">
              <BiNews fontSize="25px" color="grey" />
              Novedades
            </Link>

            <Link to="/backoffice/create-activity">
              <BsPencilFill fontSize="25px" color="red" />
              Actividades
            </Link>
            <Link to="/backoffice/create-category">
              <BsMenuButtonWideFill fontSize="25px" color="green" />
              Categorias
            </Link>
            <Link to="/backoffice/create-testimonials">
              <MdOutlineSpeakerNotes fontSize="25px" color="blue" />
              Testimonios
            </Link>
            <Link to="#action5">
              <GiOrganigram fontSize="25px" color="black" />
              Organizacion
            </Link>
            <Link to="/backoffice/create-slide">
              <RiSlideshow3Line fontSize="25px" color="black" />
              Slides
            </Link>
            <Link to="/backoffice/create-user">
              <FaUserCircle fontSize="25px" color="orange" />
              Usuarios
            </Link>
            <Link to="/backoffice/create-member">
              <HiUsers fontSize="25px" color="violet" />
              Miembros
            </Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </div>
  );
};

export default Sidebar;
