import { ACTION_FAILED, CREATE_NOVEDAD, DELETE_NOVEDAD, EDIT_NOVEDAD, GET_NOVEDAD, GET_ONE_NOVEDAD } from './types';
import { postNews, deleteNews, getNews, putNews } from '../../Services/NewsService';
import { LOADING_OFF, LOADING_ON } from '../global/globalAction';

export const CREATE_NOVEDAD_FN = (content) => (dispatch) => {
  dispatch(LOADING_ON());
  try {
    const response = postNews(content);
    dispatch({
      type: CREATE_NOVEDAD,
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

export const DELETE_NOVEDAD_FN = (id) => async (dispatch) => {
  try {
    await deleteNews(id);
    dispatch({
      type: DELETE_NOVEDAD,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: ACTION_FAILED,
      payload: error.message,
    });
  }
};

export const EDIT_NOVEDAD_FN = (id, content) => async (dispatch) => {
  dispatch(LOADING_ON());
  try {
    const response = await putNews(id, content);
    dispatch({
      type: EDIT_NOVEDAD,
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

export const GET_NOVEDAD_FN = () => async (dispatch) => {
  dispatch(LOADING_ON());
  try {
    const response = await getNews();
    dispatch({
      type: GET_NOVEDAD,
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

export const GET_ONE_NOVEDAD_FN = id => async (dispatch) => {
  dispatch(LOADING_ON());
  try {
    const response = await getNews(id);
    dispatch({
      type: GET_ONE_NOVEDAD,
      payload: id ? response : {},
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
