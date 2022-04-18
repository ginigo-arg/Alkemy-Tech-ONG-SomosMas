import { TYPES } from './types';
import { postCategory, getCategory, deleteCategory, pathCategory } from '../../Services/CategoryServices';

export const CREATE = (content) => (dispatch) => {
  try {
    const response = postCategory(content);
    dispatch({
      type: TYPES.CREATE_CATEGORIE,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: TYPES.ERROR,
      payload: error.message,
    });
  }
};

export const GET_ID = (id) => (dispatch) => {
  try {
    const response = getCategory(id);
    dispatch({
      type: TYPES.GET_CATEGORIE,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: TYPES.ERROR,
      payload: error.message,
    });
  }
};

export const GET_ALL = () => (dispatch) => {
  try {
    const response = getCategory();
    dispatch({
      type: TYPES.GET_ALL_CATEGORIE,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: TYPES.ERROR,
      payload: error.message,
    });
  }
};

export const PATCH = (id, data) => (dispatch) => {
  try {
    const response = pathCategory(id, data);
    dispatch({
      type: TYPES.EDIT_CATEGORIE,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: TYPES.ERROR,
      payload: error.message,
    });
  }
};

export const DELETE = (id) => (dispatch) => {
  try {
    const response = deleteCategory(id);
    dispatch({
      type: TYPES.DELETE_CATEGORIE,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: TYPES.ERROR,
      payload: error.message,
    });
  }
};
