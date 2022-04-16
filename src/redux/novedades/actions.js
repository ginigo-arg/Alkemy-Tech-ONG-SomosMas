import { ACTION_FAILED, CREATE_NOVEDAD, DELETE_NOVEDAD, EDIT_NOVEDAD, GET_NOVEDAD } from './types';
import { postNews, deleteNews, getNews, patchNews } from '../../Services/NewsService';

export const CREATE_NOVEDAD_FN = (content) => (dispatch) => {
  try {
    const response = postNews(content);
    dispatch({
      type: CREATE_NOVEDAD,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: ACTION_FAILED,
      payload: error.message,
    });
  }
};

export const DELETE_NOVEDAD_FN = (id) => async (dispatch) => {
  try {
    await deleteNews(id);
    dispatch({
      type: DELETE_NOVEDAD,
      payload: { id },
    });
  } catch (error) {
    dispatch({
      type: ACTION_FAILED,
      payload: error.message,
    });
  }
};

export const EDIT_NOVEDAD_FN = (id, content) => (dispatch) => {
  try {
    const response = patchNews(id, content);
    dispatch({
      type: EDIT_NOVEDAD,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: ACTION_FAILED,
      payload: error.message,
    });
  }
};

export const GET_NOVEDAD_FN = (id = null) => (dispatch) => {
  try {
    const response = getNews(`${process.env.REACT_APP_API_NEWS}`, id);
    console.log(response);
    dispatch({
      type: GET_NOVEDAD,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: ACTION_FAILED,
      payload: error.message,
    });
  }
};
