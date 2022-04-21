import { CREATE_ACTIVIDAD, DELETE_ACTIVIDAD, EDIT_ACTIVIDAD, GET_ACTIVIDAD } from './types';
import { deleteActivities, getActivities, postActivities, putActivities } from '../../Services/actividadesService';
import { ACTION_FAILED } from '../novedades/types';
import { LOADING_OFF, LOADING_ON } from '../global/globalAction';

export const GET_ACTIVIDAD_FUNCTION = (id = null) => async (dispatch) => {
  dispatch(LOADING_ON());
  try {
    const { data } = await getActivities(id);
    dispatch({
      type: GET_ACTIVIDAD,
      payload: data,
    });
    dispatch(LOADING_OFF());
  } catch (error) {
    dispatch({
      type: ACTION_FAILED,
      payload: error.message,
    });
    dispatch(LOADING_OFF());
  }
};

export const EDIT_ACTIVIDAD_FUNCTION = (id, data) => (dispatch) => {
  dispatch(LOADING_ON());
  try {
    const response = putActivities(id, data);
    dispatch({
      type: EDIT_ACTIVIDAD,
      payload: response,
    });
    dispatch(LOADING_OFF());
  } catch (error) {
    dispatch({
      type: ACTION_FAILED,
      payload: error.message,
    });
    dispatch(LOADING_OFF());
  }
};

export const CREATE_ACTIVIDAD_FUNCTION = data => (dispatch) => {
  dispatch(LOADING_ON());
  try {
    const response = postActivities(data);
    dispatch({
      type: CREATE_ACTIVIDAD,
      payload: response,
    });
    dispatch(LOADING_OFF());
  } catch (error) {
    dispatch({
      type: ACTION_FAILED,
      payload: error.message,
    });
    dispatch(LOADING_OFF());
  }
};

export const DELETE_ACTIVIDAD_FUNCTION = (id) => async (dispatch) => {
  try {
    await deleteActivities(id);
    dispatch({
      type: DELETE_ACTIVIDAD,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: ACTION_FAILED,
      payload: error.message,
    });
  }
};
