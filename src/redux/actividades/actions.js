import { CREATE_ACTIVIDAD, DELETE_ACTIVIDAD, EDIT_ACTIVIDAD, GET_ACTIVIDAD } from './types';

import { deleteActivities, getActivities, postActivities, putActivities } from '../../Services/actividadesService';
import { ACTION_FAILED } from '../novedades/types';

export const GET_ACTIVIDAD_FUNCTION = (id = null) => (dispatch) => {
  try {
    const actividades = getActivities(process.env.REACT_APP_API_ACTIVITIES, id);
    console.log('actividades-action:', actividades);
    dispatch({
      type: GET_ACTIVIDAD,
      payload: actividades,
    });
  } catch (error) {
    dispatch({
      type: ACTION_FAILED,
      payload: error.message,
    });
  }
};

export const EDIT_ACTIVIDAD_FUNCTION = (id, data) => (dispatch) => {
  try {
    const response = putActivities(id, data);
    dispatch({
      type: EDIT_ACTIVIDAD,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: ACTION_FAILED,
      payload: error.message,
    });
  }
};

export const CREATE_ACTIVIDAD_FUNCTION = (id, data) => (dispatch) => {
  try {
    const response = postActivities(id, data);
    dispatch({
      type: CREATE_ACTIVIDAD,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: ACTION_FAILED,
      payload: error.message,
    });
  }
};

export const DELETE_ACTIVIDAD_FUNCTION = (id) => async (dispatch) => {
  try {
    await deleteActivities(id);
    dispatch({
      type: DELETE_ACTIVIDAD,
      payload: { id },
    });
  } catch (error) {
    dispatch({
      type: ACTION_FAILED,
      payload: error.message,
    });
  }
};
