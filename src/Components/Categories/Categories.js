import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from 'react-router-dom';
export default function Categories () {
  const Data = [
    { id: 1968, name: 'Titulo de prueba', createdAt: '2022-03-24' },
    { id: 1953, name: 'Titulo de prueba', createdAt: '2022-03-24' },
    { id: 1967, name: 'Titulo de prueba', createdAt: '2022-03-24' },
  ];
  const history = useHistory();
  const handleEdit = (id) => {
    history.push({
      pathname: '/backoffice/categories/edit',
      state: id,
    });
  };
  return (
    <>
      <div>
        <Link to="/backoffice/categories/create">
          <Button variant="info" color="secondary">
            Crear Categoria
          </Button>
        </Link>
        <br />
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#Id</th>
              <th>Name</th>
              <th>createdAt</th>
              <th>Eliminar/Editar</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((mock, index) => {
              return (
                <tr key={index}>
                  <td>{mock.id}</td>
                  <td>{mock.name}</td>
                  <td>{mock.createdAt}</td>
                  <td>
                    <Button variant="danger">Eliminar </Button>

                    <Button variant="success" className="space" onClick={() => handleEdit(mock.id)}>
                      Editar
                    </Button>

                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
