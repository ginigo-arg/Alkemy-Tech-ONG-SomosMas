import { Post } from '../../Services/publicApiService';
import { LOGIN_USER, LOGOUT_USER, CREATE_USER, LOGIN_USER_FAILED, CREATE_USER_FAILED } from './authTypes';

export const LOGIN_USER_ACTION = (content) => (dispatch) => {
  try {
    const resp = Post('https://ongapi.alkemy.org/api/register', content);
    dispatch({
      type: LOGIN_USER,
      payload: resp,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAILED,
      payload: error,
    });
  }
};

export const LOGOUT_USER_ACTION = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};

export const CREATE_USER_ACTION = (content) => (dispatch) => {
  try {
    const resp = Post('https://ongapi.alkemy.org/api/login', content);
    dispatch({
      type: CREATE_USER,
      payload: resp,
    });
  } catch (error) {
    dispatch({
      type: CREATE_USER_FAILED,
      payload: error,
    });
  }
};
