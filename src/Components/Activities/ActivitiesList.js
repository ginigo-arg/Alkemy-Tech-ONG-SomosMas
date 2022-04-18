import React, { useState, useEffect } from 'react';
import { Container, Row, Col, CardGroup } from 'react-bootstrap';
import { GET_ACTIVITIES_PUBLIC } from '../../Services/actividadesService';
import ProgressSpinner from '../Progress/ProgressSpinner';
import { alertService } from '../../Services/alertService';
import CardComponent from '../Card/Card';
// import { Link } from 'react-router-dom';

import '../CardListStyles.css';

const ActivitiesList = () => {
  const [actividades, setActividades] = useState([]);
  const [ejecuteQuery, setEjecuteQuery] = useState(true);
  const [loading, setLoading] = useState(true);

  const simulateNetworkRequest = (time = 10000) => {
    setLoading(true);
    return new Promise((resolve) => setTimeout(resolve, time) && setLoading(false));
  };

  // LISTADO ACTIVIDADES
  useEffect(() => {
    const fetchActividades = async () => {
      setLoading(true);
      const response = await GET_ACTIVITIES_PUBLIC();
      if (response.success) {
        setActividades(response.data);
      } else {
        alertService('error', 'Ocurrio un problema al cargar la lista de actividades');
      }
      console.log('Lista de Actividades', response);
      setEjecuteQuery(false);
    };
    simulateNetworkRequest();
    if (ejecuteQuery) {
      fetchActividades();
      console.log('actividades stat', actividades);
    }
    setLoading(false);
  }, [ejecuteQuery]);

  return (
    <>
      <Container>
        {loading
          ? <div className='h-100 d-flex justify-content-center align-items-center fw-5'>
            <ProgressSpinner state={loading} dimention={10} />
          </div>
          : (
            <Row className="g-2">
              <CardGroup>
                {
                  actividades
                    ? actividades.map((actividad, index) => (
                      <Col md={4} key={index}>
                        <CardComponent image={actividad.image} title={actividad.name} description={actividad.description} footerInformation={`<a href='./actividades/${actividad.id}'>Ver detalles</a>`} />
                      </Col>
                    ))
                    : <p>No hay actividades</p>
                }
              </CardGroup>
            </Row>
          )
        }
      </Container>
    </>
  );
};

export default ActivitiesList;
