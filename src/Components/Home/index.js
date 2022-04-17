import { Container } from 'react-bootstrap';
import Slider from '../Slides/Slider';
import ProgressSpinner from '../Progress/ProgressSpinner';
import { useEffect, useState } from 'react';
import { homeInfo, homeNews, homeSlides } from '../../Services/allHomeMethods';
import HomePrincipalContent from './HomeInfo';
import NewCard from '../News/NewsCard';
import { alertService } from '../../Services/alertService';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState([]);
  const [sliders, setSliders] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const infoData = await homeInfo();
      const slidersData = await homeSlides();
      const newsData = await homeNews();
      setInfo(infoData);
      setSliders(slidersData);
      setNews(newsData);
      setIsLoading(false);
    };

    getData().catch((error) => alertService('error', error));
  }, []);

  return (
    <>
      <HomePrincipalContent data={info} />
      <Container className="d-flex flex-column justify-content-center align-items-center mt-5">
        <ProgressSpinner state={isLoading} />
        <Slider slides={sliders} />
        {
          news.length > 0 && <h3 className="fw-bold text-uppercase text-center fs-3 mb-3">Últimas Novedades</h3>
        }

        <Container className="d-flex gap-4 justify-content-center align-items-stretch flex-wrap mt-5 mb-5">
          {
            news.map((item) => (
              <NewCard key={item.id} newItem={item} />
            ))
          }
        </Container>
      </Container>
    </>
  );
};
export default Home;
