import './ActivitiesList.css';
import { useEffect } from 'react';
import {
  Button, Col, Container,
  // Table,
  Row,
} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { RiFileEditFill } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';
import ProgressSpinner from '../../Progress/ProgressSpinner';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_ACTIVIDAD_FUNCTION, GET_ACTIVIDAD_FUNCTION } from '../../../redux/actividades/actions';
import { alertService } from '../../../Services/alertService';
// import ParserHtml from '../../Parser/Parser';

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
    const confirm = await alertService('confirm', 'Seguro deseas eliminar esta actividad?');
    if (confirm) dispatch(DELETE_ACTIVIDAD_FUNCTION(id));
  };

  useEffect(async () => {
    dispatch(GET_ACTIVIDAD_FUNCTION());
  }, []);

  useEffect(() => {}, [actividades]);

  return (
    <Container>
      <div className="px-3 my-3 border-5 border-bottom border-secondary">
        <h2 className="text-secondary text-uppercase m-0">Listado actividades</h2>
        <Link
          to="/backoffice/create-activity"
          className="my-3 btn btn-secondary text-white rounded-pill"
        >
          Agregar actividad
        </Link>
      </div>
      {stateLoading
        ? <div className="d-flex justify-content-center my-5">
          <ProgressSpinner state={stateLoading} />
        </div>
        // : <div className='overflow-scroll'>
        //   <Table striped bordered hover className='overflow-scroll'>
        //     <thead className='bg-secondary'>
        //       <tr>
        //         <th>Título</th>
        //         <th>Imagen</th>
        //         <th>Acción</th>
        //       </tr>
        //     </thead>
        //     <tbody>
        //       {actividades.length > 0 &&
        //     actividades.map((activity) => (
        //       <tr key={activity.id}>
        //         <td>{activity.name}</td>
        //         <td>
        //           {activity.image !== ''
        //             ? (
        //               <div style={{ width: '150px', height: '150px', overflow: 'hidden' }}>
        //                 <img
        //                   src={activity.image}
        //                   alt={activity.name}
        //                   className=""
        //                 />
        //               </div>
        //             )
        //             : (
        //               <svg className="img-thumbnail rounded" width="200px" height="100px">
        //                 <title>{activity.name}</title>
        //                 <rect width="100%" height="100%" fill="#514242"></rect>
        //                 <text x="30%" y="50%" fill="#eceeef" dy=".5em">
        //                   No media
        //                 </text>
        //               </svg>
        //             )}
        //         </td>
        //         <td className="d-flex justify-content-center align-items-center gap-1">
        //           <Button
        //             className="btn-danger"
        //             onClick={() => handleDelete(activity.id)}
        //           >
        //             <AiFillDelete />
        //           </Button>
        //           <Button
        //             className="btn-info"
        //             onClick={() => handleEdit(activity)}
        //           >
        //             <RiFileEditFill />
        //           </Button>
        //         </td>
        //       </tr>
        //     )).reverse()}
        //     </tbody>
        //   </Table>
        : <Container>
          <Row className='text-center px-2'>
            <Col xs={3} className='pb-2 border-end'>
              <h5>Título</h5>
            </Col>
            <Col xs={5} className='pb-2 border-end'>
              <h5>Descripción</h5>
            </Col>
            <Col xs={2} className='pb-2 border-end'>
              <h5>Imagen</h5>
            </Col>
            <Col xs={2} className='pb-2'>
              <h5>Acciones</h5>
            </Col>
          </Row>
          {actividades.length > 0 &&
              actividades.map((activity) => (
                <Row key={activity.id} className='px-2 border-top activities-row-container'>
                  <Col className='border-end py-3' xs={3}><p>{activity.name}</p></Col>
                  <Col className=' border-end py-3' xs={5} dangerouslySetInnerHTML={{ __html: activity.description }}></Col>
                  <Col xs={2} className="activity-image-container d-flex flex-row justify-content-center border-end py-3">
                    {activity.image !== ''
                      ? (
                        <img
                          src={activity.image}
                          alt={activity.name}
                          className='activities-image'
                        />
                      )
                      : (
                        <svg className="img-thumbnail rounded" width="10rem" height="10rem">
                          <title>{activity.name}</title>
                          <rect width="100%" height="100%" fill="#514242"></rect>
                          <text x="30%" y="50%" fill="#eceeef" dy=".5em">
                            No media
                          </text>
                        </svg>
                      )}
                  </Col>
                  <Col xs={2} className='d-flex flex-row justify-content-evenly align-items-center'>
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
                  </Col>
                </Row>)).reverse()}
        </Container>
        // </div>
      }
    </Container>
  );
};

export default ActivitiesList;
