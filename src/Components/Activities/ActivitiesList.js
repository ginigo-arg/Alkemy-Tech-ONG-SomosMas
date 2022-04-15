import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { GET_ACTIVITIES_PUBLIC } from '../../Services/actividadesService';
import '../CardListStyles.css';
import ProgressSpinner from '../Progress/ProgressSpinner';
import { alertService } from '../../Services/alertService';

const ActivitiesList = () => {
  const activitiesMock = [
    { id: 2, name: 'Titulo de prueba', description: 'Descripcion de prueba' },
    { id: 1, name: 'Titulo de prueba', description: 'Descripcion de prueba' },
    { id: 3, name: 'Titulo de prueba', description: 'Descripcion de prueba' },
  ];

  const [activities, setActivities] = useState([]);
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
          setActivities(response.data);
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
      console.log(...activities);
    }
  }, [ejecuteQuery]);

  return (
    <Container>
      {loading
        ? <div className='h-100 d-flex justify-content-center align-items-center fw-5'>
          {/* <ProgressSpinner className='me-5' state={isLoading} animation='grow' dimention={10} /> */}
          <ProgressSpinner state={loading} dimention={10} />
        </div>
        : <ul className='list-container'>
          {activitiesMock.length > 0
            ? (
              activitiesMock.map((activity) => {
                return (
                  <li className='card-info' key={activity.id}>
                    <h3>{activity.name}</h3>
                    <p>{activity.description}</p>
                  </li>
                );
              })
            )
            : (
              <p>No hay actividades</p>
            )}
        </ul>
      }
    </Container>
  );
};

export default ActivitiesList;
