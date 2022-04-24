import { useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { RiFileEditFill } from 'react-icons/ri';
// import { BiPlusMedical } from 'react-icons/bi';
// import { FaThList } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_NOVEDAD_FN, GET_NOVEDAD_FN } from '../../../redux/novedades/actions';
import ProgressSpinner from '../../Progress/ProgressSpinner';
import { alertService } from '../../../Services/alertService';

const NewsList = () => {
  // const history = useHistory();
  const dispatch = useDispatch();
  const newsState = useSelector(state => state.novedades);
  const stateLoading = useSelector(state => state.global.loading);

  useEffect(() => {
    dispatch(GET_NOVEDAD_FN());
  }, []);

  useEffect(() => {}, [newsState.novedades]);

  return (
    <Container className="my-4 p-0 border">
      <div className="px-3 my-3 border-5 border-bottom border-secondary">
        <h2 className="text-secondary text-uppercase m-0">Listado de Novedades</h2>
        <Link
          to="/backoffice/news/create"
          className="my-3 btn btn-secondary text-white rounded-pill"
        >
          Agregar novedad
        </Link>
      </div>

      {stateLoading
        ? <div className="d-flex justify-content-center my-5">
          <ProgressSpinner state={stateLoading} />
        </div>
        : <>
          {newsState.novedades.length > 0
            ? <Table striped hover responsive>
              <thead className="bg-secondary text-white rounded">
                <tr>

                  <th className="text-center">Titulo</th>
                  <th className="text-center">Imagen</th>
                  <th className="text-center" colSpan={3}>
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {newsState.novedades.map((item) => {
                  return <RowsNew key={item.id} newData={[item]} />;
                }).reverse()}
              </tbody>
            </Table>

            : <div className="alert-warning rounded d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
              <h3>No hay novedades para mostrar</h3>
            </div>
          }
        </>
      }
    </Container>
  );
};
// ------------------------------------------- COMPONENTE ROW NEW LIST---------------------------------------
const RowsNew = ({ newData }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleEdit = element => {
    history.push('/backoffice/news/edit', {
      id: element.id,
    });
  };

  const handleDelete = async id => {
    const confirm = await alertService('confirm', 'Seguro deseas eliminar esta novedad?');
    if (confirm) dispatch(DELETE_NOVEDAD_FN(id));
  };

  return (
    <tr key={'new_' + newData[0].id} className="align-middle">
      {newData.map((element) => {
        return (
          <>
            <td hidden>{element.id}</td>
            <td>{element.name}</td>
            <td className="text-center" style={{ width: '230px' }}>
              {element.image !== ''
                ? (
                  <img
                    src={element.image}
                    alt={element.name}
                    className="img-thumbnail rounded"
                    style={{ width: '200px', height: '100px' }}
                  />
                )
                : (
                  <svg
                    className="img-thumbnail rounded"
                    width="200px"
                    height="100px"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>{element.name}</title>
                    <rect width="100%" height="100%" fill="#514242"></rect>
                    <text x="5%" y="50%" fill="#eceeef" dy=".5em">
                      No media
                    </text>
                  </svg>
                )}
            </td>
            <td className="text-center" style={{ width: '120px' }}>
              {element.createdAt}
            </td>
            <td className="text-center" style={{ width: '70px' }}>
              <Button
                className="btn btn-danger"
                onClick={() => handleDelete(element.id)}
              >
                <AiFillDelete />
              </Button>
            </td>
            <td className="text-center" style={{ width: '70px' }}>

              <Button className='btn-info' onClick={() => {
                handleEdit(element);
              }}>
                <RiFileEditFill />
              </Button>

            </td>
          </>
        );
      })}
    </tr>
  );
};

export default NewsList;
