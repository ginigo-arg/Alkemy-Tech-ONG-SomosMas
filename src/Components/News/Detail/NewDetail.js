import { Suspense, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useScreen } from '../../../hooks/useScreen';
import { getNews } from '../../../Services/NewsService';
import SectionTitles from '../../SectionTitles/SectionTitles';
import ParserHtml from '../../Parser/Parser';
import Comments from './Comments';
import ProgressSpinner from '../../Progress/ProgressSpinner';

const NewDetail = () => {
  const { isScreen, fromRef } = useScreen();
  const [newDetail, setNewDetail] = useState(false);
  const { id } = useParams();

  useEffect(async () => {
    const res = await getNews(id);
    setNewDetail(res);
  }, []);

  return (
    <>
      {!newDetail
        ? <div className="d-flex justify-content-center my-5">
          <ProgressSpinner />
        </div>
        : <>
          <SectionTitles title={newDetail.name} />
          <Container className="d-flex justify-content-center flex-wrap">
            <img className="mt-5 mb-4" src={newDetail.image} alt="Imagen de la novedad" />
            <div className="mt-5 px-2 w-100" style={{ textAlign: 'justify' }}>
              <ParserHtml text={newDetail.content} />
            </div>
            <hr />

            {/* COMENTARIOS */}
            <div ref={fromRef} className="w-100">
              <Suspense>
                { isScreen ? <Comments /> : null }
              </Suspense>
            </div>
          </Container>
        </>
      }
    </>
  );
};

export default NewDetail;
