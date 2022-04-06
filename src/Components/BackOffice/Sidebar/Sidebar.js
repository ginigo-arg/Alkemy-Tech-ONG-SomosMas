/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */

import React from 'react';
import { Navbar, Offcanvas, Nav, Button } from 'react-bootstrap';
import { BiNews } from 'react-icons/bi';
import { BsPencilFill, BsMenuButtonWideFill } from 'react-icons/bs';
import { MdOutlineSpeakerNotes } from 'react-icons/md';
import { GiOrganigram } from 'react-icons/gi';
import { RiSlideshow3Line } from 'react-icons/ri';
import { HiUsers } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Sidebar.css';
const Sidebar = () => {
  return (
    <div>
      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="start"
      >
        <Offcanvas.Header closeButton className='offCanvasHeader'>
          <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          <Button href="/"size="sm"className='btn btn-success'>Volver a Web publica</Button>
        </Offcanvas.Header>
        <Offcanvas.Body>

          <Nav className="justify-content-end flex-grow-1 pe-3 ">
            <div className='item'>
            <Link to="/backoffice/create-news">
              <BiNews className='icon' fontSize="25px" color="grey" />
              Novedades
            </Link></div>
            <hr className=" d-inline-block"></hr>
            <div className='item'>
            <Link to="/backoffice/create-activity">
              <BsPencilFill className='icon' fontSize="25px" color="red" />
              Actividades
            </Link></div><hr></hr>
            <div className='item'>
            <Link to="/backoffice/create-category">
              <BsMenuButtonWideFill className='icon' fontSize="25px" color="green" />
              Categorias
            </Link></div><hr></hr>
            <div className='item'>
            <Link to="/backoffice/create-testimonials">
              <MdOutlineSpeakerNotes className='icon' fontSize="25px" color="blue" />
              Testimonios
            </Link></div><hr></hr>
            <div className='item'>
            <Link to="#action5">
              <GiOrganigram className='icon' fontSize="25px" color="black" />
              Organizacion
            </Link></div><hr></hr>
            <div className='item'>
            <Link to="/backoffice/create-slide">
              <RiSlideshow3Line className='icon'fontSize="25px" color="black" />
              Slides
            </Link></div><hr></hr>
            <div className='item'>
            <Link to="/backoffice/create-user">
              <FaUserCircle className='icon' fontSize="25px" color="orange" />
              Usuarios
            </Link></div><hr></hr>
            <div className='item'>
            <Link to="/backoffice/create-member">
              <HiUsers className='icon' fontSize="25px" color="violet" />
              Miembros
            </Link></div>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </div>
  );
};

export default Sidebar;
