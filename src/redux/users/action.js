import { CREATE_USER, DELETE_USER, EDIT_USER, GET_USER } from './types';
import { PostUsers, DeleteUsers, PutUsers, getUsers } from '../../Services/usersService';

export const CREATE_USER_FN = (content) => (dispatch) => {
  const response = PostUsers(content);
  dispatch({
    type: CREATE_USER,
    payload: response,
  });
};

export const DELETE_USER_FN = (id) => (dispatch) => {
  DeleteUsers(id);
  dispatch({
    type: DELETE_USER,
    payload: { id },
  });
};

export const EDIT_USER_FN = (id, content) => (dispatch) => {
  const response = PutUsers(id, content);
  dispatch({
    type: EDIT_USER,
    payload: response,
  });
};

export const GET_USER_FN = (id = null) => (dispatch) => {
  const response = getUsers(id);
  dispatch({
    type: GET_USER,
    payload: response,
  });
};
