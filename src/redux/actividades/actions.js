import { GET_ACTIVIDAD } from './types';

import { getActivities } from '../../Services/actividadesService';

export const GET_ACTIVIDAD_FUNCTION = (id) => (distpatch) => {
  try {
    const response = getActivities(process.env.REACT_APP_API_ACTIVITIES, id);
    console.log('response-action:', response);
    distpatch({
      type: GET_ACTIVIDAD,
      payload: response,
    });
  } catch (error) {

  }
};
