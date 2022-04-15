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
      console.log(data);
      setIsLoading(false);
      setNews(data);
    };
    fetchData().catch((e) => alertService('error', e.message));
  }, []);

  return (
    <>
      <SectionTitles title="Novedades" />
      <Container className="d-flex flex-row gap-4 justify-content-center align-items-center mt-5">
        <ProgressSpinner state={isLoading} />
        {
          news.map((item, index) => (
            <div key={index}>
              <NewCard newItem={item} />
            </div>
          ))
        }
      </Container>
    </>
  );
};

export default NewsList;
