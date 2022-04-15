import { CREATE_USER, DELETE_USER, EDIT_USER, GET_USER, FALIDED_USER } from './types';
import { PostUsers, DeleteUsers, PutUsers, getUsers } from '../../Services/usersService';

export const CREATE_USER_FN = (content) => (dispatch) => {
  try {
    const response = PostUsers(content);
    dispatch({
      type: CREATE_USER,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: FALIDED_USER,
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
      type: FALIDED_USER,
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
      type: FALIDED_USER,
      payload: error.message,
    });
  }
};

export const GET_USER_FN = (id = null) => (dispatch) => {
  try {
    const response = getUsers(id);
    dispatch({
      type: GET_USER,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: FALIDED_USER,
      payload: error.message,
    });
  }
};
