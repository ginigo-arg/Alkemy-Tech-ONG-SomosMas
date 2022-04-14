import '../CardListStyles.css';
import { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { getNews } from '../../Services/NewsService';
import SectionTitles from '../SectionTitles/SectionTitles';
import Card from '../Card/Card';
import { useHistory } from 'react-router-dom';

const NewsList = () => {
  const [news, setNews] = useState(false);
  const history = useHistory();

  useEffect(async () => {
    const res = await getNews();
    setNews(res);
  }, []);

  return (
    <>
      <SectionTitles title="Novedades" />
      {!news
        ? <Spinner />
        : <Container>
          <ul className="my-5 p-0 d-flex flex-wrap">
            {news.length > 0
              ? (
                news.map((element) => {
                  return (
                    <div
                      key={element.id}
                      onClick={() => history.push(`/novedades/${element.id}`)}
                    >
                      <Card
                        title={element.name}
                        image={element.image}
                      />
                    </div>
                  );
                })
              )
              : (
                <p className="w-100 my-5 text-center display-6">No hay novedades</p>
              )}
          </ul>
        </Container>
      }
    </>
  );
};

export default NewsList;
