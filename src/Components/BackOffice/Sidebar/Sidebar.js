/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */

import React from 'react';
import { Navbar, Offcanvas, Nav } from 'react-bootstrap';
import { BiNews } from 'react-icons/bi';
import { BsPencilFill } from 'react-icons/bs';
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
        className='bg-dark'
      >
        <Offcanvas.Header closeButton className='offCanvasHeader'>

          <Link to="/"size="sm"className='btn btn-warning'>Ir al inicio</Link>
        </Offcanvas.Header>
        <Offcanvas.Body className="scroll-not">

          <Nav className="justify-content-end flex-grow-1 pe-3 bg-red">
            <div className='item'>
            <Link to="/backoffice/news" className='text-white'>
              <BiNews className='icon' fontSize="25px" color="grey" />

              Novedades

            </Link></div>
            <hr className=" d-inline-block"></hr>
            <div className='item'>
            <Link to="/backoffice/activities" className='text-white'>
              <BsPencilFill className='icon' fontSize="25px" color="grey" />

              Actividades

            </Link></div><hr></hr>

            <div className='item'>
            <Link to="/backoffice/organization/edit" className='text-white'>
              <GiOrganigram className='icon' fontSize="25px" color="grey" />

              Organizacion

            </Link></div><hr></hr>
            <div className='item'>
            <Link to="/backoffice/slides" className='text-white'>
              <RiSlideshow3Line className='icon'fontSize="25px" color="grey" />

              Slides

            </Link></div><hr></hr>
            <div className='item'>
            <Link to="/backoffice/users" className='text-white'>
              <FaUserCircle className='icon' fontSize="25px" color="grey" />

              Usuarios

            </Link></div><hr></hr>
            <div className='item'>
            <Link to="/backoffice/members" className='text-white'>
              <HiUsers className='icon' fontSize="25px" color="grey" />

              Miembros

            </Link></div><hr></hr>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </div>
  );
};

export default Sidebar;
