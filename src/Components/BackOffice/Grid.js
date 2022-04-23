import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiNews } from 'react-icons/bi';
import { BsPencilFill } from 'react-icons/bs';
import { GiOrganigram } from 'react-icons/gi';
import { RiSlideshow3Line } from 'react-icons/ri';
import { HiUsers } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';

const BackofficeGrid = () => {
  return (
    <Container style={{ display: 'grid', minHeight: 'calc(100vh - 60px)', placeItems: 'center' }}>
      <Container style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '30px' }}>
        <Link to="/backoffice/news" style={{ width: '100%', padding: '20px', borderRadius: '5px', gap: '10px', boxShadow: '0 -1px 15px #ededed', display: 'grid', placeItems: 'center' }}>
          <BiNews className='icon' fontSize="45px" color="grey" />
          <h4>Novedades</h4>
          <p className="text-muted text-center fw-light">Ir al cuestionario para ver y editar las novedades.</p>
        </Link>

        <Link to="/backoffice/activities" style={{ width: '100%', padding: '10px', borderRadius: '5px', gap: '10px', boxShadow: '0 -1px 15px #ededed', display: 'grid', placeItems: 'center' }}>
          <BsPencilFill className='icon' fontSize="45px" color="grey" />
          <h4>Actividades</h4>
          <p className="text-muted text-center fw-light">Ir al cuestionario para ver y editar las actividades.</p>
        </Link>

        <Link to="/backoffice/organization" style={{ width: '100%', padding: '10px', borderRadius: '5px', gap: '10px', boxShadow: '0 -1px 15px #ededed', display: 'grid', placeItems: 'center' }}>
          <GiOrganigram className='icon' fontSize="45px" color="grey" />
          <h4>Organizacion</h4>
          <p className="text-muted text-center fw-light">Ir al cuestionario para ver y editar los datos de la organización.</p>
        </Link>

        <Link to="/backoffice/slides" style={{ width: '100%', padding: '10px', borderRadius: '5px', gap: '10px', boxShadow: '0 -1px 15px #ededed', display: 'grid', placeItems: 'center' }}>
          <RiSlideshow3Line className='icon'fontSize="45px" color="grey" />
          <h4>Slides</h4>
          <p className="text-muted text-center fw-light">Ir al cuestionario para ver y editar las fotos de los slides.</p>
        </Link>

        <Link to="/backoffice/users" style={{ width: '100%', padding: '10px', borderRadius: '5px', gap: '10px', boxShadow: '0 -1px 15px #ededed', display: 'grid', placeItems: 'center' }}>
          <FaUserCircle className='icon' fontSize="45px" color="grey" />
          <h4>Usuarios</h4>
          <p className="text-muted text-center fw-light">Ir al cuestionario para ver y editar la información de los usuarios.</p>
        </Link>

        <Link to="/backoffice/members" style={{ width: '100%', padding: '10px', borderRadius: '5px', gap: '10px', boxShadow: '0 -1px 15px #ededed', display: 'grid', placeItems: 'center' }} >
          <HiUsers className='icon' fontSize="45px" color="grey" />
          <h4>Miembros</h4>
          <p className="text-muted text-center fw-light">Ir al cuestionario para ver y editar la información de los miembros.</p>
        </Link>
      </Container>
    </Container>
  );
};
export default BackofficeGrid;
