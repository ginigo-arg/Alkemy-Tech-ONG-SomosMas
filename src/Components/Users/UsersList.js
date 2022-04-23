import { useDispatch, useSelector } from 'react-redux';
import { GET_USER_FN, DELETE_USER_FN } from '../../redux/users/action';
import { useEffect } from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProgressSpinner from '../Progress/ProgressSpinner';
import { RiFileEditFill } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';
import './UsersList.css';

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const loading = useSelector(state => state.global.loading);

  const handleDelete = (id) => {
    dispatch(DELETE_USER_FN(id));
  };

  useEffect(() => {
    dispatch(GET_USER_FN());
  }, []);

  return (
    <Container className="my-4 p-0 border vh-100 overflow-scroll container-list">
      <div className="px-3 my-3 border-5 border-bottom border-secondary">
        <h2 className="text-secondary text-uppercase m-0">Listado de usuarios</h2>
        <Link
          to="/backoffice/users/create"
          className="my-3 btn btn-secondary text-white rounded-pill"
        >
          Agregar usuario
        </Link>
      </div>

      {loading
        ? <Container className='d-flex justify-content-center'>
          <ProgressSpinner state={loading} />
        </Container>
        : <div className='overflow-scroll container-table'>
          <Table >
            <thead className='bg-secondary '>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {users?.length > 0 &&
          users?.map((user) => (
            <tr key={user?.id}>
              <td>{user?.id}</td>
              <td>{user?.name}</td>
              <td className='me-auto ms-auto' style={{ width: '230px' }}>
                {user.image !== ''
                  ? (
                    <div style={{ maxWidth: '150px', maxHeight: '150px', overflow: 'hidden' }}>
                      <img
                        src={user.image}
                        alt={user.name}
                        className="w-100"
                      />
                    </div>
                  )
                  : (
                    <svg className="img-thumbnail rounded" width="200px" height="100px">
                      <title>{user.name}</title>
                      <rect width="100%" height="100%" fill="#514242"></rect>
                      <text x="30%" y="50%" fill="#eceeef" dy=".5em">
                        No media
                      </text>
                    </svg>
                  )}
              </td>
              <td className="d-flex justify-content-center align-items-center gap-1">
                <Button className="btn-danger" onClick={() => handleDelete(user.id)}>
                  <AiFillDelete />
                </Button>
                <Button className="btn-info" >
                  <RiFileEditFill />
                </Button>
              </td>
            </tr>
          )).reverse()}
            </tbody>
          </Table>
        </div>
      }
    </Container>
  );
};

export default UsersList;
