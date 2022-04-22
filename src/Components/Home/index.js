import { Container, Button } from 'react-bootstrap';
import Slider from '../Slides/Slider';
import { useEffect, useState } from 'react';
import { homeNews } from '../../Services/allHomeMethods';
import NewCard from '../News/NewsCard';
import { alertService } from '../../Services/alertService';
import SectionVideo from './SectionVideo/SectionVideo';
import TextMarquee from './Marquee/TextMarquee';
import Partners from './Partners/Partners';
import Faq from './SectionFAQ/Faq';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GET_SLIDE_HOME_FN } from '../../redux/slides/actions';

const Home = () => {
  const [news, setNews] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const { slides } = useSelector(state => state.slides);
  const loading = useSelector(state => state.global.loading);

  useEffect(() => {
    dispatch(GET_SLIDE_HOME_FN());
    console.log('loading:', loading);
    const getData = async () => {
      const newsData = await homeNews();
      setNews(newsData);
      console.log('slidesGET:', slides);
    };
    getData().catch((error) => alertService('error', error));
  }, []);
  useEffect(() => {

  }, [loading]);
  return (
    <>
      <Container fluid className='bg-info'>
        <TextMarquee/>
      </Container>
      <Slider slides={slides || []} />
      <Container fluid className="d-flex flex-column justify-content-center align-items-center mt-5 p-0">
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
