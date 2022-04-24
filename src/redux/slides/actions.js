import { ACTION_FAILED, GET_SLIDE_HOME, CREATE_SLIDE, DELETE_SLIDE, GET_SLIDE_BACKOFFICE, GET_SINGLE_SLIDE_BACKOFFICE, CLEAR_SINGLE_SLIDE, EDIT_SLIDE } from './types';
import { LOADING_ON, LOADING_OFF } from '../global/globalAction';
import { deleteSlide, postSlide, getSlides, putSlide } from '../../Services/SlideServices';
import { homeSlides } from '../../Services/allHomeMethods';
import { LOGIN_AUTH_ME_ACTION } from '../auth/authActions';

export const GET_SLIDE_HOME_FN = () => async (dispatch) => {
  dispatch(LOADING_ON());
  dispatch(LOGIN_AUTH_ME_ACTION());
  try {
    const response = await homeSlides();
    dispatch({
      type: GET_SLIDE_HOME,
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
export const GET_SLIDE_BACKOFFICE_FN = () => async (dispatch) => {
  dispatch(LOADING_ON());
  try {
    const data = await getSlides();
    dispatch({
      type: GET_SLIDE_BACKOFFICE,
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
export const GET_SINGLE_SLIDE_BACKOFFICE_FN = (id) => async (dispatch) => {
  dispatch(LOADING_ON());
  try {
    const data = await getSlides(id);
    dispatch({
      type: GET_SINGLE_SLIDE_BACKOFFICE,
      payload: id ? data : [],
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

export const CLEAR_SINGLE_SLIDE_FN = () => (dispatch) => {
  dispatch({
    type: CLEAR_SINGLE_SLIDE,
    payload: [],
  });
};

export const CREATE_SLIDE_FN = (content) => async (dispatch) => {
  try {
    dispatch(LOADING_ON());
    const { data } = await postSlide(content);
    dispatch({
      type: CREATE_SLIDE,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ACTION_FAILED,
      payload: 'error catch create slide',
    });
  } finally { dispatch(LOADING_OFF()); }
};

export const EDIT_SLIDE_FN = (id, data) => async (dispatch) => {
  try {
    dispatch(LOADING_ON());
    const response = await putSlide(id, data);
    dispatch({
      type: EDIT_SLIDE,
      payload: response,
    });
    dispatch(LOADING_OFF());
  } catch (error) {
    dispatch({
      type: ACTION_FAILED,
      payload: error.message,
    },
    );
    dispatch(LOADING_OFF());
  }
};

export const DELETE_SLIDE_FN = (id) => async (dispatch) => {
  try {
    await deleteSlide(id);
    dispatch({
      type: DELETE_SLIDE,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: ACTION_FAILED,
      payload: error.message,
    });
  }
};
