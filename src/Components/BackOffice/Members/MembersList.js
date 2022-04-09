import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RowMember from './RowMember';

// Array para similar respuesta de Api
const MockMembers = [
  { id: 581, name: 'Luciano', photo: '' },
  { id: 2, name: 'Mariano', photo: '' },
  { id: 3, name: 'Nicolás', photo: '' },
];

const MembersList = ({ members = MockMembers }) => {
  return (
    <Container className="p-0 border">
      <div className="px-3 my-3 border-5 border-bottom border-primary">
        <h2 className="text-primary text-uppercase m-0">Listado de miembros</h2>
        <Link
          to="/backoffice/members/create"
          className="my-3 btn btn-primary text-white rounded-pill"
        >
          Agregar miembro
        </Link>
      </div>
      {/*  AGREGAR BUSCADOR AQUÍ */}
      {members.length > 0
        ? <Container>
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
              {members.map((item) => (
                <RowMember key={item.id} member={item} />
              ))}
            </tbody>
          </Table>
        </Container>
        : <div className="alert-warning rounded d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
          <h3>No hay miembros para mostrar</h3>
        </div>
      }
    </Container>
  );
};

export default MembersList;
