import { Container, Button } from 'react-bootstrap';
import Slider from '../Slides/Slider';
import ProgressSpinner from '../Progress/ProgressSpinner';
import { useEffect, useState } from 'react';
import { homeNews, homeSlides } from '../../Services/allHomeMethods';
// import HomePrincipalContent from './HomeInfo';
import NewCard from '../News/NewsCard';
import { alertService } from '../../Services/alertService';
import SectionVideo from './SectionVideo/SectionVideo';
import TextMarquee from './Marquee/TextMarquee';
import Partners from './Partners/Partners';
import Faq from './SectionFAQ/Faq';

import { useHistory } from 'react-router-dom';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const [info, setInfo] = useState([]);
  const [sliders, setSliders] = useState([]);
  const [news, setNews] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      // const infoData = await homeInfo();
      const slidersData = await homeSlides();
      const newsData = await homeNews();
      // setInfo(infoData);
      setSliders(slidersData);
      setNews(newsData);
      setIsLoading(false);
    };

    getData().catch((error) => alertService('error', error));
  }, []);

  return (
    <>
      <Container fluid className='bg-info'>
        <TextMarquee/>
      </Container>
      <Slider slides={sliders} />
      <Container fluid className="d-flex flex-column justify-content-center align-items-center mt-5 p-0">
        <ProgressSpinner state={isLoading} />
        {
          news.length > 0 && <h3 className="fw-bold text-uppercase text-center fs-3 mb-3">Últimas Novedades</h3>
        }

        <Container className="d-flex gap-4 justify-content-center align-items-stretch flex-wrap mt-3 mb-5">
          {
            news.map((item) => (
              <NewCard key={item.id}
                image={item.image}
                title={item.name}
                description={item.content}
              />
            )).slice(0, 3)
          }
        </Container>

        <Button className='btn btn-primary text-center text-white mb-5' onClick={() => history.push('/novedades')}>Todas las Noticias...</Button>

        <Container fluid className='section-video bg-warning'>
          <SectionVideo/>
        </Container>
        <Container>
          <Partners/>
        </Container>
        <Container fluid className='bg-info faq'>
          <Faq/>
        </Container>
      </Container>
    </>
  );
};
export default Home;
