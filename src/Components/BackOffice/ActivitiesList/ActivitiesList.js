import { Button, Container, Table } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../assets/img/logo-somos-mas.png';
import { RiFileEditFill } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';
import './ActivitiesList.css';

const activities = [
  {
    id: 1,
    name: 'Actividad 1',
    description: 'Descripcion de prueba2',
    image: logo,
  },
  {
    id: 2,
    name: 'ACtividad 2',
    description: 'Descripcion de prueba3',
    image: logo,
  },
  {
    id: 3,
    name: 'Actividad 3',
    description: 'Descripcion de prubea4',
    image: logo,
  },
];

const ActivitiesList = () => {
  const history = useHistory();

  const handleEdit = (id) => {
    history.push('/backoffice/create-activity', {
      id,
    });
  };
  return (
    <Container>
      <div className="activities-title">
        <h3>LISTADO ACTIVIDADES</h3>
        <Link to="/backoffice/create-activity">
          <Button className="btn-danger">Crear Actividad</Button>
        </Link>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Imagen</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {activities &&
            activities.map((activity) => (
              <tr key={activity.id}>
                <td>{activity.id}</td>
                <td>{activity.name}</td>
                <td>{activity.description}</td>
                <td>
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-25"
                  />
                </td>
                <td className="d-flex justify-content-center align-items-center gap-1">
                  <Button className="btn-danger">
                    <AiFillDelete />
                  </Button>
                  <Button
                    className="btn-info"
                    onClick={() => handleEdit(activity.id)}
                  >
                    <RiFileEditFill />
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ActivitiesList;
