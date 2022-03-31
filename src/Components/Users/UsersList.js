import './UsersList.css';
import { Button } from 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UsersList = () => {
  const mockUsers = [
    { id: 1, name: 'Monica', email: 'monica@gmail.com' },
    { id: 2, name: 'Fabian', email: 'fabian@gmail.com' },
    { id: 3, name: 'Pedro', email: 'pedro@gmail.com' },
    { id: 4, name: 'Camila', email: 'camila@gmail.com' },
    { id: 5, name: 'Joaquin', email: 'joaquin@gmail.com' },
    { id: 6, name: 'Sara', email: 'sara@gmail.com' },
  ];

  // FUNCIONES PARA EDITAR/ELIMINAR USUARIOS MEDIANTE EL BOTON CORRESPONDIENTE
  const handleDelete = () => {};
  const handleEdit = () => {};

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
        <Col xs={1} className="userslist-title">
          Id
        </Col>
        <Col xs={4} className="userslist-title">
          Name
        </Col>
        <Col xs={5} className="userslist-title">
          Email
        </Col>
      </Row>
      {mockUsers.map((n) => (
        <>
          <Row className="align-items-center py-2 border-bottom">
            <Col xs={1} className="userslist-text">
              {n.id}
            </Col>
            <Col xs={4} className="userslist-text">
              {n.name}
            </Col>
            <Col xs={5} className="userslist-text">
              {n.email}
            </Col>
            <Col xs={2} className="d-flex flex-row justify-content-between">
              <Button
                className="userslist-buttons"
                size="sm"
                variant="success"
                id={n.id}
                onClick={handleEdit}
              >
                Editar
              </Button>
              <Button
                className="userslist-buttons"
                size="sm"
                variant="danger"
                id={n.id}
                onClick={handleDelete}
              >
                Eliminar
              </Button>
            </Col>
          </Row>
        </>
      ))}
    </Container>
  );
};

export default UsersList;
