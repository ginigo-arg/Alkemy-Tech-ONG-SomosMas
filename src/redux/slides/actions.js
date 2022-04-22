import { ACTION_FAILED, GET_SLIDE_HOME, CREATE_SLIDE, DELETE_SLIDE, GET_SLIDE_BACKOFFICE } from './types';
import { LOADING_ON, LOADING_OFF } from '../global/globalAction';
import { deleteSlide, postSlide, getSlides } from '../../Services/SlideServices';
import { homeSlides } from '../../Services/allHomeMethods';

export const GET_SLIDE_HOME_FN = () => async (dispatch) => {
  dispatch(LOADING_ON());
  try {
    const response = await homeSlides();
    console.log('Response:', response);
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
    console.log('Response get back:', data);
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
    console.log('Response get back:', data);
    dispatch({
      type: GET_SLIDE_BACKOFFICE,
      payload: id ? data : null,
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

export const CREATE_SLIDE_FN = (content) => async (dispatch) => {
  try {
    dispatch(LOADING_ON());
    const { data } = await postSlide(content);
    if (data) console.log('responsepost:', data);
    dispatch({
      type: CREATE_SLIDE,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ACTION_FAILED,
      payload: error.message,
    });
  } finally { dispatch(LOADING_OFF()); }
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
