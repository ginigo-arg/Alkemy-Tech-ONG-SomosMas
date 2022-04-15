import '../CardListStyles.css';
import { Container, Card, Button } from 'react-bootstrap';
import SectionTitles from '../SectionTitles/SectionTitles';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ProgressSpinner from '../Progress/ProgressSpinner';
import { getNews } from '../../Services/NewsService';
import { alertService } from '../../Services/alertService';

const NewsList = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNews();
      console.log(data);
      // setIsLoading(false);
      setNews(data);
    };
    fetchData().catch((e) => alertService('error', e.message));
    setIsLoading(false);
  }, []);

  return (
    <>
      <SectionTitles title="Novedades" />
      <Container className="d-flex flex-row gap-4 justify-content-center align-items-center mt-5">
        <ProgressSpinner state={isLoading} />
        {
          news && news.map((item, index) => (
            <div key={index}>
              <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    <span dangerouslySetInnerHTML={{ __html: `${item.content}` }} />
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => history.push(`/novedades/${item.id}`)}
                  >Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          ))
        }
      </Container>
    </>
  );
};

export default NewsList;
