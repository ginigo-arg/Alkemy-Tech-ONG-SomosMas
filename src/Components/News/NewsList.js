import '../CardListStyles.css';
import { Container } from 'react-bootstrap';
import SectionTitles from '../SectionTitles/SectionTitles';
import Card from '../Card/Card';

// Array para simular respuesta de Api
const newMocks = [
  { id: 1, name: 'title', description: 'description' },
  { id: 2, name: 'title', description: 'description' },
  { id: 3, name: 'title', description: 'description' },
];

const NewsList = ({ news = newMocks }) => {
  return (
    <>
      <SectionTitles title="Novedades" />
      <Container>
        <ul className="my-5 p-0 d-flex flex-wrap">
          {news.length > 0
            ? (
              news.map((element) => {
                return (
                  <Card
                    key={element.title}
                    title={element.title}
                    description={element.description}
                  />
                );
              })
            )
            : (
              <p className="w-100 my-5 text-center display-6">No hay novedades</p>
            )}
        </ul>
      </Container>
    </>
  );
};

export default NewsList;
