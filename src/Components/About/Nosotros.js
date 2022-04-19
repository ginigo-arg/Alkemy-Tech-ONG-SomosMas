import { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
// import Title from '../SectionTitles/SectionTitles';
import { getAllMembers } from '../../Services/MemberService';
import { alertService } from '../../Services/alertService';
import CardMembers from './cardTeam';

export default function Nosotros () {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    const { data } = await getAllMembers()
      .catch(err => alertService('error', err))
      .finally(setLoading(true));
    setMembers(data);
    console.log('members:', data);
  }, [setMembers]);

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
            { members.length > 0
              ? (
                members.map((item) => {
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
