import React, { useState, useEffect } from 'react';
import { Container, Alert } from 'react-bootstrap';
import { getActivities } from '../../../Services/actividadesService';
import { alertService } from '../../../Services/alertService';
import { useParams } from 'react-router-dom';
import ProgressSpinner from '../../Progress/ProgressSpinner';
import LazyImg from '../../Lazyload/LazyImg';
import ParserHtml from '../../Parser/Parser';

const Detail = (props) => {
  // const [activityDetail, setActivityDetail] = useState(false);
  const { id } = useParams();

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
                ? <>
                  <div>
                    <LazyImg image={activityDetail.image} alt='Imagen de la novedad' />
                  </div>
                  <div className='mt-5 px-2 h-100 w-100' style={{ textAlign: 'justify' }}>
                    <ParserHtml text={activityDetail.description} />
                  </div></>
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
