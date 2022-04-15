import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { GET_ACTIVITIES_PUBLIC } from '../../../Services/actividadesService';
import { alertService } from '../../../Services/alertService';
import ProgressSpinner from '../../Progress/ProgressSpinner';
import SectionTitles from '../../SectionTitles/SectionTitles';

const Detail = (props) => {
  const [activity, setActivity] = useState({});
  const [ejecuteQuery, setEjecuteQuery] = useState(true);
  const [loading, setLoading] = useState(false);

  const simulateNetworkRequest = (time = 10000) => {
    setLoading(true);
    return new Promise((resolve) => setTimeout(resolve, time) && setLoading(false));
  };

  // LISTADO ACTIVIDADES
  useEffect(() => {
    const fetchActividades = async (id = null) => {
      setLoading(true);
      const response = await GET_ACTIVITIES_PUBLIC();
      let msn = '';
      if (response.success) {
        if (id) {
          msn = `Actividad (${id})`;
          setActivity(response.data);
        } else {
          msn = 'Lista de Actividades';
        }
      } else {
        alertService('error', 'Ocurrio un problema al cargar la lista de actividades');
      }
      console.log(msn, response.data);
      setEjecuteQuery(false);
      setLoading(false);
    };
    simulateNetworkRequest();
    if (ejecuteQuery) {
      fetchActividades();
      console.log(...activity);
    }
  }, [ejecuteQuery]);
  return (
    <>
      <SectionTitles title={props.title} backgroundImg={props.backgroundImg} />
      <Container>
        { loading && <div className='d-flex justify-content-center align-items-center fw-5 h-100'>
          <ProgressSpinner state={loading} dimention={10} />
        </div>
        }
      </Container>
    </>
  );
};
export default Detail;
