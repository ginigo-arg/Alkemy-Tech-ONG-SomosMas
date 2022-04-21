import './UsersList.css';
import { useDispatch, useSelector } from 'react-redux';
import { GET_USER_FN, DELETE_USER_FN } from '../../redux/users/action';
import { useEffect } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);

  const deleteUser = (id) => {
    dispatch(DELETE_USER_FN(id));
  };

  useEffect(() => {
    dispatch(GET_USER_FN());
  }, []);

  return (
    <Container>
      <Row className="my-2 justify-content-end">
        <Col xs={2} className="d-flex justify-content-center">
          <Link to="/backoffice/users/create">
            <Button variant="info">Nuevo Usuario</Button>
          </Link>
        </Col>
      </Row>
      <Row className="mt-2 userslist-title-container align-content-center">
        <Col xs={5} className="userslist-title">
          Nombre
        </Col>
        <Col xs={5} className="userslist-title">
          Email
        </Col>
      </Row>
      {users.length > 0 && users.map((n) => (
        <Row key={n.id} className="align-items-center py-2 border-bottom">
          <Col xs={5} md={4} lg={5} className="userslist-text">
            {n.name}
          </Col>
          <Col xs={7} md={5} lg={5} className="userslist-text">
            {n.email}
          </Col>
          <Col xs={12} md={3} lg={2} className="d-flex flex-row justify-content-evenly justify-content-lg-between mt-3 mt-md-0">
            <Button
              className="userslist-buttons"
              size="sm"
              variant="success"
              id={n.id}
              onClick={(e) => e.preventDefault()}
            >
              Editar
            </Button>
            <Button
              className="userslist-buttons"
              size="sm"
              variant="danger"
              id={n.id}
              onClick={() => deleteUser(n.id)}
            >
              Eliminar
            </Button>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default UsersList;
