import { CREATE_USER, DELETE_USER, EDIT_USER, GET_USER, FAILED_USER } from './types';
import { PostUsers, DeleteUsers, PutUsers, GetUsers } from '../../Services/usersService';

export const CREATE_USER_FN = (content) => (dispatch) => {
  try {
    const response = PostUsers(content);
    dispatch({
      type: CREATE_USER,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: FAILED_USER,
      payload: error.message,
    });
  }
};

export const DELETE_USER_FN = (id) => (dispatch) => {
  try {
    DeleteUsers(id);
    dispatch({
      type: DELETE_USER,
      payload: { id },
    });
  } catch (error) {
    dispatch({
      type: FAILED_USER,
      payload: error.message,
    });
  }
};

export const EDIT_USER_FN = (id, content) => (dispatch) => {
  try {
    const response = PutUsers(id, content);
    dispatch({
      type: EDIT_USER,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: FAILED_USER,
      payload: error.message,
    });
  }
};

export const GET_USER_FN = (id = null) => async (dispatch) => {
  try {
    const response = await GetUsers(id);
    dispatch({
      type: GET_USER,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: FAILED_USER,
      payload: error.message,
    });
  }
};
