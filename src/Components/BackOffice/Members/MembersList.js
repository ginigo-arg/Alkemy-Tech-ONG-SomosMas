import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { GET_MEMBERS_FUNCTION } from '../../../redux/Miembros/action';
import RowMember from './RowMember';
import ProgressSpinner from '../../Progress/ProgressSpinner';

const MembersList = () => {
  const dispatch = useDispatch();
  const memberState = useSelector(state => state.miembros);
  const stateLoading = useSelector(state => state.global.loading);

  useEffect(() => {
    dispatch(GET_MEMBERS_FUNCTION());
  }, []);

  useEffect(() => {}, [memberState.miembros]);

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

      {stateLoading
        ? <div className="d-flex justify-content-center my-5">
          <ProgressSpinner state={stateLoading} />
        </div>
        : <>
          {memberState.miembros.length > 0
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
                  {memberState.miembros.map((item) => (
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
