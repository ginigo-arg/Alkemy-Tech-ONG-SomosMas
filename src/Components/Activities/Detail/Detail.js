import React, { useState, useEffect } from 'react';
import { Container, Alert } from 'react-bootstrap';
import { getActivities } from '../../../Services/actividadesService';
import { alertService } from '../../../Services/alertService';
import { useParams } from 'react-router-dom';
import ProgressSpinner from '../../Progress/ProgressSpinner';
import LazyImg from '../../Lazyload/LazyImg';
import SectionTitles from '../../SectionTitles/SectionTitles';
import ParserHtml from '../../Parser/Parser';

const Detail = (props) => {
  // const [activityDetail, setActivityDetail] = useState(false);
  const { id } = useParams();

  const [activityDetail, setActivityDetail] = useState([]);
  const [ejecuteQuery, setEjecuteQuery] = useState(true);
  const [loading, setLoading] = useState(true);
  const msnError = 'Ocurrio un problema al cargar la actividad.';

  const simulateNetworkRequest = (time = 10000) => {
    setLoading(true);
    return new Promise((resolve) => setTimeout(resolve, time) && setLoading(false));
  };
  // LISTADO ACTIVIDADES
  useEffect(() => {
    const fetchActividades = async () => {
      setLoading(true);
      const response = await getActivities(id);
      if (response.success) {
        setActivityDetail(response.data);
      } else {
        alertService('error', msnError);
      }
      console.log('Lista de Actividades', response);
      setEjecuteQuery(false);
    };
    simulateNetworkRequest();
    if (ejecuteQuery) {
      fetchActividades();
      console.log('actividades stat', activityDetail);
    }
    setLoading(false);
  }, [ejecuteQuery]);

  return (
    <>
      <SectionTitles title={activityDetail.name ?? 'Detalle actividad'} />
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
