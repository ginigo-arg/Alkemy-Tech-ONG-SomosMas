import React, { useState, useEffect, Suspense } from 'react';
import { Container, Alert, Card } from 'react-bootstrap';
import { getActivities } from '../../../Services/actividadesService';
import { alertService } from '../../../Services/alertService';
import { useParams } from 'react-router-dom';
import ProgressSpinner from '../../Progress/ProgressSpinner';
import LazyImg from '../../Lazyload/LazyImg';
import { useScreen } from '../../../hooks/useScreen';
import Comments from '../../News/Detail/Comments';
import ParserHtml from '../../Parser/Parser';

const Detail = (props) => {
  const { id } = useParams();
  const { isScreen, fromRef } = useScreen();

  const [activityDetail, setActivityDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const msnError = 'Ocurrio un problema al cargar la actividad.';

  // LISTADO ACTIVIDADES
  useEffect(() => {
    const fetchActividades = async () => {
      setLoading(true);
      const response = await getActivities(id);
      if (response) {
        setActivityDetail(response);
        setLoading(false);
      } else {
        alertService('error', msnError);
      }
    };
    fetchActividades();
  }, []);

  return (
    <>
      <Container className='mt-3'>
        {loading
          ? <div className='d-flex justify-content-center my-5'>
            <ProgressSpinner state={loading} dimention={10} />
          </div>
          : <>
            {
              activityDetail.id
                ? <Container className="d-flex justify-content-center flex-wrap my-5">
                  <Card className='news-container p-lg-5 d-flex flex-column align-items-center'>
                    <div className='news-image-container'>
                      <LazyImg image={activityDetail.image} alt="Imagen de la novedad" />
                    </div>
                    <Card.Body>
                      <Card.Title className='news-title'>{`${activityDetail.name}`}</Card.Title>
                    </Card.Body>
                    <Card.Body>
                      <div ref={fromRef} className="w-100">
                        <div style={{ minHeight: '200px' }}>
                          <ParserHtml text={activityDetail.description} />
                        </div>
                        <Suspense>
                          { isScreen ? <Comments /> : null }
                        </Suspense>
                      </div>
                    </Card.Body>
                  </Card>
                </Container>
                : <Alert key={'alert_actividad_' + id} className='h-100 w-100 fs-1 bg-light d-flex justify-content-center align-items-center' style={{ minHeight: '300px' }} variant='light'>
                  <div>
                    {msnError + ' '}
                    <br /><br />
                    <Alert.Link href='/actividades' className="link-primary">Regresar a actividades</Alert.Link>
                  </div>
                </Alert>
            }
          </>
        }
      </Container>
    </>
  );
};
export default Detail;
