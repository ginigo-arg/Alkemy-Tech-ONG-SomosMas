import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RowProject from './RowProject';

// Array para similar respuesta de Api
const Mock = [
  {
    id: 1,
    title: 'Prueba',
    description: 'Text',
    image: '',
    due_date: '2021-07-15T00:00:00.000000Z',
  },
  {
    id: 2,
    title: 'Prueba 2',
    description: 'Text',
    image: '',
    due_date: '2021-07-15T00:00:00.000000Z',
  },
  {
    id: 3,
    title: 'Prueba',
    description: 'Text',
    image: '',
    due_date: '2021-07-15T00:00:00.000000Z',
  },
];

const ProjectList = ({ proyecto = Mock }) => {
  return (
    <Container className="p-0 border">
      <div className="px-3 my-3 border-5 border-bottom border-primary">
        <h2 className="text-primary text-uppercase m-0">
          Listado de Proyectos
        </h2>
        <Link
          to="/backoffice/create-project"
          className="my-3 btn btn-primary text-white rounded-pill"
        >
          Agregar Proyecto
        </Link>
      </div>
      {proyecto.length > 0
        ? (
          <Container>
            <Table striped hover responsive>
              <thead className="bg-primary text-white rounded">
                <tr>
                  <th className="px-3">Nombre</th>
                  <th className="text-center">Foto</th>
                  <th className="text-center" colSpan={2}>
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {proyecto.map((item) => (
                  <RowProject key={item.id} proyecto={item} />
                ))}
              </tbody>
            </Table>
          </Container>
        )
        : (
          <div
            className="alert-warning rounded d-flex justify-content-center align-items-center"
            style={{ height: '300px' }}
          >
            <h3>No hay proyectos para mostrar</h3>
          </div>
        )}
    </Container>
  );
};

export default ProjectList;
