import { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAllMembers } from '../../../Services/MemberService';
import { alertService } from '../../../Services/alertService';
import RowMember from './RowMember';
import ProgressSpinner from '../../Progress/ProgressSpinner';

const MembersList = () => {
  const [members, setMembers] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const fetchData = async () => {
      const { data } = await getAllMembers();
      setIsLoading(false);
      setMembers(data);
    };
    fetchData().catch((e) => {
      alertService('error', e.message);
      setIsLoading(false);
    });
  }, []);

  return (
    <Container className="my-4 p-0 border">
      <div className="px-3 my-3 border-5 border-bottom border-secondary">
        <h2 className="text-secondary text-uppercase m-0">Listado de miembros</h2>
        <Link
          to="/backoffice/members/create"
          className="my-3 btn btn-secondary text-white rounded-pill"
        >
          Agregar miembro
        </Link>
      </div>
      {/*  AGREGAR BUSCADOR AQUÍ */}
      {isLoading
        ? <div className="d-flex justify-content-center my-5">
          <ProgressSpinner state={isLoading} />
        </div>
        : <>
          {members.length > 0
            ? <Container>
              <Table striped hover responsive>
                <thead className="bg-secondary text-white rounded">
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
        </>
      }
    </Container>
  );
};

export default MembersList;
