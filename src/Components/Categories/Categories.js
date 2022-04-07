import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
export default function Categories () {
  const Data = [
    { id: 2, name: 'Titulo de prueba', createdAt: '2022-03-24' },
    { id: 1, name: 'Titulo de prueba', createdAt: '2022-03-24' },
    { id: 3, name: 'Titulo de prueba', createdAt: '2022-03-24' },
  ];

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
                    <Link to="/backoffice/categories/edit">
                      <Button variant="success" className="space">
                        Editar
                      </Button>
                    </Link>
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
