import './ActivitiesList.css';
import { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { RiFileEditFill } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';
import { getActivities } from '../../../Services/actividadesService';
import ProgressSpinner from '../../Progress/ProgressSpinner';
import { alertService } from '../../../Services/alertService';

const ActivitiesList = () => {
  const history = useHistory();
  const [activities, setActivities] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleEdit = activity => {
    history.push('/backoffice/activities/edit', {
      id: activity.id,
    });
  };

  useEffect(async () => {
    const fetchData = async () => {
      const { data } = await getActivities();
      setIsLoading(false);
      setActivities(data);
    };
    fetchData().catch((e) => {
      alertService('error', e.message);
      setIsLoading(false);
    });
  }, []);

  return (
    <Container>
      <div className="activities-title">
        <h3>LISTADO ACTIVIDADES</h3>
        <Link to="/backoffice/create-activity">
          <Button className="btn-danger">Crear Actividad</Button>
        </Link>
      </div>
      {isLoading
        ? <div className="d-flex justify-content-center my-5">
          <ProgressSpinner state={isLoading} />
        </div>
        : <>
          <Table striped bordered hover>
            <thead>
              <tr>
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
                    onClick={() => handleEdit(activity)}
                  >
                    <RiFileEditFill />
                  </Button>
                </td>
              </tr>
            ))}
            </tbody>
          </Table>
        </>
      }
    </Container>
  );
};

export default ActivitiesList;
