import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
// import { alertService } from '../../Services/alertService';
import CardMembers from './cardTeam';
import { useDispatch, useSelector } from 'react-redux';
import { GET_MEMBERS_FUNCTION } from '../../redux/Miembros/action';
import { GET_ABOUT_FUNCTION } from '../../redux/Nosotros/actions';
import Organization from './Organization';
import Spinner from '../Spinner/Spinner';

export default function Nosotros () {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const stateMiembros = useSelector(state => state.miembros);
  const stateOrganizacion = useSelector(state => state.organizacion.data);

  useEffect(() => {
    dispatch(GET_MEMBERS_FUNCTION());
    dispatch(GET_ABOUT_FUNCTION());
    console.log('organizacion', stateOrganizacion);
    if (stateMiembros.length > 0) setLoading(true);
  }, []);

  return (
    !loading
      ? <Spinner/>
      : <>
        <Container fluid className='bg-info m-0'>
          <Organization
            id={stateOrganizacion.id}
            name={stateOrganizacion.name}
            shortDescription={stateOrganizacion.short_description}

          />
        </Container>

        <Container className='d-flex justify-content-center py-5 my-2'>
          <p className='w-75 text-center'>{stateOrganizacion.long_description}</p>
        </Container>

        <h2 className='text-center text-info'>
          <strong>
            Nuestro equipo
          </strong>
        </h2>
        <Container className="d-flex gap-4 justify-content-center align-items-stretch flex-wrap mt-5 mb-5">
          { stateMiembros.length > 0
            ? (
              stateMiembros.map((item) => {
                return (
                  <CardMembers
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    facebookUrl={item.facebookUrl}
                    linkedingUrl= {item.linkedingUrl}
                  />
                );
              })
            )
            : (
              <p className="w-100 my-5 text-center display-6">No hay Miembros</p>
            ) }

        </Container>
      </>
  );
}
