import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useScreen } from '../../../hooks/useScreen';
import { getNews } from '../../../Services/NewsService';
import Comments from './Comments';
import ProgressSpinner from '../../Progress/ProgressSpinner';
import LazyImg from '../../Lazyload/LazyImg';
import { Card, Container } from 'react-bootstrap';
import './NewDetail.css';
import ParserHtml from '../../Parser/Parser';
import { useDispatch } from 'react-redux';
import { LOGIN_AUTH_ME_ACTION } from '../../../redux/auth/authActions';

const NewDetail = () => {
  const { isScreen, fromRef } = useScreen();
  const [newDetail, setNewDetail] = useState(false);
  const { id } = useParams();

  useEffect(async () => {
    const res = await getNews(id);
    setNewDetail(res);
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LOGIN_AUTH_ME_ACTION());
  }, []);

  return (
    !newDetail
      ? <div className="d-flex justify-content-center my-5">
        <ProgressSpinner />
      </div>
      : <Container className="d-flex justify-content-center flex-wrap my-5">
        <Card className='news-container p-lg-5 d-flex flex-column align-items-center'>
          <div className='news-image-container'>
            <LazyImg image={newDetail.image} alt="Imagen de la novedad" />
          </div>
          <Card.Body>
            <Card.Title className='news-title'>{`${newDetail.name}`}</Card.Title>
          </Card.Body>
          <Card.Body>
            <div ref={fromRef} className="w-100">
              <div style={{ minHeight: '200px' }}><ParserHtml text={newDetail.content} /></div>
              <Suspense>
                { isScreen ? <Comments /> : null }
              </Suspense>
            </div>
          </Card.Body>
        </Card>
      </Container>
  );
};

export default NewDetail;
