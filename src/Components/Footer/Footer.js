import './Footer.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitterSquare } from 'react-icons/fa';
import logo from '../../assets/img/logo-somos-mas.png';

const Footer = () => {
  const navigation = [
    { to: '/', title: 'Inicio' },
    { to: '/Nosotros', title: 'Nosotros' },
    { to: '/Novedades', title: 'Novedades' },
    { to: '/Testimonios', title: 'Testimonios' },
    { to: '/Contacto', title: 'Contacto' },
    { to: '/Contribuye', title: 'Contribuye' },
  ];

  return (
    <footer className="fixed-bottom bg-light text-dark">
      <img src={logo} className="footer-logo" />
      <Nav className="justify-content-center my-2">
        {navigation.map((item) => (
          <Nav.Item>
            <Link className="nav-link text-dark" to={item.to}>
              {item.title}
            </Link>
          </Nav.Item>
        ))}
      </Nav>
      <nav>
        <a href="#" className="text-dark mx-3">
          <FaFacebook />
        </a>
        <a href="#" className="text-dark mx-3">
          <FaInstagram />
        </a>
        <a href="#" className="text-dark mx-3">
          <FaTwitterSquare />
        </a>
      </nav>
      <hr className="my-0 w-50 d-inline-block" />
      <p className="my-3 footer-firm">2022 by Alkemy. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
