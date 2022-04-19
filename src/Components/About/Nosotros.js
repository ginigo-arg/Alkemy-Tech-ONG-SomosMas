import { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { alertService } from '../../Services/alertService';
import CardMembers from './cardTeam';
import { useDispatch, useSelector } from 'react-redux';
import { GET_MEMBERS_FUNCTION } from '../../redux/Miembros/action';

export default function Nosotros () {
  // const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector(state => state.miembros);

  useEffect(() => {
    dispatch(GET_MEMBERS_FUNCTION()).catch(err => alertService('error', err));
    console.log('state nosotros:', state);
    if (state.length > 0) setLoading(true);
  }, []);

  return (
    !loading
      ? <Spinner />
      : <>
        <Container className='mt-5'>
          <h1 className='text-primary mb-3'>
            <strong>
              Una organización sin fines de lucro para niños que necesitan de nuestra ayuda
            </strong>
          </h1>
          <p>
            Tatarena es una organización sin fines de lucro que busca conectar personas y empresas a proyectos independientes, capaces de transformar vidas. Nacimos con un gran propósito: dar visibilidad a los proyectos que necesitan ser vistos, estén donde estén.

            A través de nuestra plataforma, diseñada y desarrollada por expertos, así como estrategias de contenido digital, estamos utilizando la tecnología y lo mejor para impactar a las sociedades.
          </p>

          <h2 className='text-center text-primary'>
            <strong>
              Nuestro equipo
            </strong>
          </h2>
          <Container className="d-flex gap-4 justify-content-center align-items-stretch flex-wrap mt-5 mb-5">
            { state.length > 0
              ? (
                state.map((item) => {
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

        </Container>
      </>
  );
}
