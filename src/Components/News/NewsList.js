import '../CardListStyles.css';
import { Container } from 'react-bootstrap';
import SectionTitles from '../SectionTitles/SectionTitles';
import { useState, useEffect } from 'react';
import ProgressSpinner from '../Progress/ProgressSpinner';
import { getNews } from '../../Services/NewsService';
import { alertService } from '../../Services/alertService';
import NewCard from './NewsCard';

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
            />
          ))
        }
      </Container>
    </>
  );
};

export default NewsList;
