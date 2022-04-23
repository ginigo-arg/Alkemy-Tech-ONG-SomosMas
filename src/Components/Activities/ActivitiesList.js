import React, { useEffect, useState } from 'react';
import { getActivities } from '../../Services/actividadesService';
// import { alertService } from '../../Services/alertService';
import '../CardListStyles.css';
import { Container } from 'react-bootstrap';
import ProgressSpinner from '../Progress/ProgressSpinner';
// import CardComponent from '../Card/Card';
import NewCard from '../News/NewsCard';

const ActivitiesList = () => {
  const [actividades, setActividades] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const data = await getActivities();
    setActividades(data);
    setIsLoading(false);
  }, [setActividades]);

  return (
    <Container className="d-flex gap-4 justify-content-center align-items-stretch flex-wrap mt-5 mb-5">
      <ProgressSpinner state={isLoading}/>
      {Array.isArray(actividades)
        ? actividades.map(item => (
          <NewCard key={item.id}
            image={item.image}
            title={item.name}
            description={item.description}
            id={item.id}
          />
        )).reverse()
        : <p>No hay actividades</p>
      }
    </Container>
  );
};

export default ActivitiesList;
