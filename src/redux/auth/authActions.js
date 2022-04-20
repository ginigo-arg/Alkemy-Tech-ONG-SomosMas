import { LOGIN, AUTH, REGISTER } from '../../Services/authService';
import { LOGIN_USER, LOGOUT_USER, CREATE_USER, LOGIN_USER_FAILED, CREATE_USER_FAILED, LOGIN_AUTH } from './authTypes';

export const LOGIN_USER_ACTION = (content) => async (dispatch) => {
  try {
    const resp = await LOGIN(content);
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

export const LOGIN_AUTH_ME_ACTION = (content) => async (dispatch) => {
  try {
    const resp = await AUTH(content);
    dispatch({
      type: LOGIN_AUTH,
      payload: resp,
      token: content,
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

export const CREATE_USER_ACTION = (content) => async (dispatch) => {
  try {
    const resp = await REGISTER(content);
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
