import Title from '../SectionTitles/SectionTitles';
import Card from '../Card/CardNosotros';
import { Container } from 'react-bootstrap';

const NosotrosMocks = [
  {
    name: 'Juan Perez',
    image: 'http://ongapi.alkemy.org/storage/aztEU7E8ue.jpeg',
    description: 'Tesorero',
    facebookUrl: 'http://www.facebook.com',
    linkedinUrl: 'http://www.linkedin.com ',
  },
  {
    name: 'Rodrigo Fuente',
    image: 'http://ongapi.alkemy.org/storage/aztEU7E8ue.jpeg',
    description: 'Tesorero',
    facebookUrl: 'http://www.facebook.com',
    linkedinUrl: 'http://www.linkedin.com ',
  },
];

// import { Button } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';

export default function Nosotros ({ nos = NosotrosMocks }) {
  const nosotrostx = 'Sobre Nosotros';
  // const history = useHistory();
  return (
    <>
      <Title
        title={nosotrostx}
        backgroundImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhW6bkouhOtOGiBmCAT9T27gOEbBFD-5utzvSKrS-NPZUlMPEA4zNPYqZZmubU-AQ3nQM&usqp=CAU"
      />
      <Container>
        <ul className="my-5 p-0 d-flex flex-wrap">
          { nos.length > 0
            ? (
              nos.map((element) => {
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
