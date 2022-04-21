import './ActivitiesList.css';
import { useEffect } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { RiFileEditFill } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';
import ProgressSpinner from '../../Progress/ProgressSpinner';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_ACTIVIDAD_FUNCTION, GET_ACTIVIDAD_FUNCTION } from '../../../redux/actividades/actions';
import { alertService } from '../../../Services/alertService';

const ActivitiesList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { actividades } = useSelector(state => state.actividades);
  const stateLoading = useSelector(state => state.global.loading);

  const handleEdit = activity => {
    history.push('/backoffice/activities/edit', {
      id: activity.id,
    });
  };

  const handleDelete = async id => {
    const confirm = await alertService('confirm', 'Seguro deseas eliminar este miembro?');
    if (confirm) dispatch(DELETE_ACTIVIDAD_FUNCTION(id));
  };

  useEffect(async () => {
    dispatch(GET_ACTIVIDAD_FUNCTION());
  }, []);

  useEffect(() => {}, [actividades]);

  return (
    <Container>
      <div className="activities-title">
        <h3>LISTADO ACTIVIDADES</h3>
        <Link to="/backoffice/create-activity">
          <Button className="btn-danger">Crear Actividad</Button>
        </Link>
      </div>
      {stateLoading
        ? <div className="d-flex justify-content-center my-5">
          <ProgressSpinner state={stateLoading} />
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
              {actividades.length > 0 &&
            actividades.map((activity) => (
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
                  <Button
                    className="btn-danger"
                    onClick={() => handleDelete(activity.id)}
                  >
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
