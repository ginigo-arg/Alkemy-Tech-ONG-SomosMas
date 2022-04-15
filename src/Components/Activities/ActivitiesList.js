import React, { useEffect, useState } from 'react';
import { getActivities } from '../../Services/actividadesService';
import '../CardListStyles.css';
import ParserHtml from '../Parser/Parser';

const ActivitiesList = () => {
  const [actividades, setActividades] = useState([]);
  useEffect(async () => {
    const activities = await getActivities();
    console.log('activities', activities);
    setActividades(activities);
  }, []);

  return (
    <div>
      <ul className="list-container">
        {actividades.length > 0
          ? (
            actividades.map((activity) => {
              return (
                <li className="card-info" key={activity.id}>
                  <h3>{activity.name}</h3>
                  <ParserHtml text={activity.description} />
                </li>
              );
            })
          )
          : (
            <p>No hay actividades</p>
          )}
      </ul>
    </div>
  );
};

export default ActivitiesList;
