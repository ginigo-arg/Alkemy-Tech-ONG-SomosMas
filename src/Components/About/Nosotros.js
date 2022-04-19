import { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import Title from '../SectionTitles/SectionTitles';
import Card from '../Card/CardNosotros';
import { getAllMembers } from '../../Services/MemberService';
import { alertService } from '../../Services/alertService';

export default function Nosotros () {
  const nosotrostx = 'Sobre Nosotros';
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    await getAllMembers()
      .then(res => setMembers(res))
      .catch(err => alertService('error', err))
      .finally(setLoading(true));
  }, []);

  return (
    !loading
      ? <Spinner />
      : <>
        <Title
          title={nosotrostx}
          backgroundImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhW6bkouhOtOGiBmCAT9T27gOEbBFD-5utzvSKrS-NPZUlMPEA4zNPYqZZmubU-AQ3nQM&usqp=CAU"
        />
        <Container>
          <ul className="my-5 p-0 d-flex flex-wrap">
            { members.length > 0
              ? (
                members.map((element) => {
                  return (
                    <Card
                      key={element.title}
                      name={element.name}
                      description={element.description}
                      image={element.image}
                      facebookUrl={element.facebookUrl}
                      linkedinUrl= {element.linkedinUrl}

                    />
                  );
                })
              )
              : (
                <p className="w-100 my-5 text-center display-6">No hay Miembros</p>
              ) }
          </ul>
        </Container>
      </>
  );
}
