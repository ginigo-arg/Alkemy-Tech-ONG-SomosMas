import { ACTION_FAILED, GET_SLIDE, CREATE_SLIDE, DELETE_SLIDE } from './types';
import { LOADING_ON, LOADING_OFF } from '../global/globalAction';
import { deleteSlide, postSlide } from '../../Services/SlideServices';
import { homeSlides } from '../../Services/allHomeMethods';
export const GET_SLIDE_FN = () => async (dispatch) => {
  dispatch(LOADING_ON);
  try {
    const response = await homeSlides();
    console.log('Response:', response);
    dispatch({
      type: GET_SLIDE,
      payload: response,
    });
    dispatch(LOADING_OFF);
  } catch (error) {
    dispatch({
      type: ACTION_FAILED,
      payload: error.message,
    });
    dispatch(LOADING_OFF());
  }
};

export const CREATE_SLIDE_FN = (content) => async (dispatch) => {
  dispatch(LOADING_ON);
  try {
    const response = await postSlide(content);
    console.log('responsepost:', response);
    dispatch({
      type: CREATE_SLIDE,
      payload: response,
    });
    dispatch(LOADING_OFF);
  } catch (error) {
    dispatch({
      type: ACTION_FAILED,
      payload: error.message,
    });
    dispatch(LOADING_OFF);
  }
};

export const DELETE_SLIDE_FN = (id) => async (dispatch) => {
  dispatch(LOADING_ON);
  try {
    const response = deleteSlide(id);
    console.log('responseDelete:', response);
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
