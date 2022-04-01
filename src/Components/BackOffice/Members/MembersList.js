import { Container, Table } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { RiFileEditFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

// Array para similar respuesta de Api
const MockMembers = [
  { id: 1, name: 'Luciano', photo: '' },
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
      {members.length > 0 ? (
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
              {members.map((item) => (
                <RowMember member={item} />
              ))}
            </tbody>
          </Table>
        </Container>
      ) : (
        <div
          className="alert-warning rounded d-flex justify-content-center align-items-center"
          style={{ height: '300px' }}
        >
          <h3>No hay miembros para mostrar</h3>
        </div>
      )}
    </Container>
  );
};

export default MembersList;

//------------------------------------------- COMPONENT ROW MEMBER LIST---------------------------------------
const RowMember = ({ member }) => {
  return (
    <tr key={member.id} className="align-middle">
      <td className="px-3">{member.name}</td>
      <td className="text-center" style={{ width: '230px' }}>
        {member.photo !== '' ? (
          <img
            src={member.photo}
            alt={member.name}
            className="img-thumbnail rounded"
            style={{ width: '200px', height: '100px' }}
          />
        ) : (
          <svg className="img-thumbnail rounded" width="200px" height="100px">
            <title>{member.name}</title>
            <rect width="100%" height="100%" fill="#514242"></rect>
            <text x="30%" y="50%" fill="#eceeef" dy=".5em">
              No media
            </text>
          </svg>
        )}
      </td>
      <td className="text-center" style={{ width: '70px' }}>
        <Link className="btn btn-danger text-white" title="Eliminar">
          <AiFillDelete />
        </Link>
      </td>
      <td className="text-center" style={{ width: '70px' }}>
        <Link className="btn btn-info text-dark" title="Editar">
          <RiFileEditFill />
        </Link>
      </td>
    </tr>
  );
};
