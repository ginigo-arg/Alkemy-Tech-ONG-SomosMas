import '../CardListStyles.css';
import { Container, Row, Col, CardGroup } from 'react-bootstrap';
import SectionTitles from '../SectionTitles/SectionTitles';
import { useState, useEffect } from 'react';
import ProgressSpinner from '../Progress/ProgressSpinner';
import { getNews } from '../../Services/NewsService';
import { alertService } from '../../Services/alertService';
// import NewCard from './NewsCard';
import CardComponent from '../Card/Card';

const NewsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNews();
      setIsLoading(false);
      setNews(data);
    };
    fetchData().catch((e) => {
      alertService('error', e.message);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <SectionTitles title="Novedades" />
      <Container className="d-flex gap-4 justify-content-center align-items-stretch flex-wrap mt-5 mb-5">
        <ProgressSpinner state={isLoading} />
        {
          news.length > 0 && news.map((item) => (
            <NewCard key={item.id}
              image={item.image}
              title={item.name}
              description={item.content}
              id={item.id}
            />
          ))
        }
        {isLoading
          ? <div className='h-100 d-flex justify-content-center align-items-center fw-5'>
            <ProgressSpinner state={isLoading} dimention={10} />
          </div>
          : (
            <Row className="g-2">
              <CardGroup>
                {
                  news
                    ? news.map((novedad, index) => (
                      <Col md={4} key={index}>
                        <CardComponent image={novedad.image} title={novedad.name} description={novedad.content} footerInformation={`<a href='./novedades/${novedad.id}'>Ver detalles</a>`} />
                      </Col>
                    ))
                    : <p>No hay noticias para visualizar</p>
                }
              </CardGroup>
            </Row>
          )
        }
      </Container>
    </>
  );
};

export default NewsList;
