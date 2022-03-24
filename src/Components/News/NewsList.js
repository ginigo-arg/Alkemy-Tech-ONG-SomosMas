import { Container } from 'react-bootstrap';
import '../CardListStyles.css';
import SectionTitles from '../SectionTitles/SectionTitles';

const newMocks = [
  { id: 1, name: 'title', description: 'description' },
  { id: 2, name: 'title', description: 'description' },
  { id: 3, name: 'title', description: 'description' },
  { id: 4, name: 'title', description: 'description' },
  { id: 5, name: 'title', description: 'description' },
  { id: 6, name: 'title', description: 'description' },
];

const NewsList = ({ news = newMocks }) => {
  return (
    <>
      <SectionTitles title="Novedades" />
      <Container>
        <ul className="my-5 p-0 d-flex flex-wrap">
          {news.length > 0 ? (
            news.map((element) => {
              return (
                // Reemplazar por componente card
                <li className="card-info m-1" key={element.id}>
                  <h3>{element.name}</h3>
                  <p>{element.description}</p>
                </li>
                // --------------------------
              );
            })
          ) : (
            <p>No hay novedades</p>
          )}
        </ul>
      </Container>
    </>
  );
};

export default NewsList;
