import {
  createMember,
  deleteMember,
  editMember,
  getAllMembers,
  getMember,
} from '../../Services/MemberService';

import {
  ACTION_FAILED,
  GET_MEMBERS,
  CREATE_MEMBER,
  EDIT_MEMBER,
  DELETE_MEMBER,
} from '../Miembros/types';

import { LOADING_ON, LOADING_OFF } from '../global/globalAction';

export const GET_MEMBERS_FUNCTION = () => async (dispatch) => {
  dispatch(LOADING_ON());
  try {
    const data = await getAllMembers();
    dispatch({
      type: GET_MEMBERS,
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

export const GET_MEMBER_FN = (id) => async (dispatch) => {
  dispatch(LOADING_ON());
  try {
    const { data } = await getMember(id);
    dispatch({
      type: GET_MEMBERS,
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

export const CREATE_MEMBER_FN = (content) => (dispatch) => {
  dispatch(LOADING_ON());
  try {
    const response = createMember(content);
    dispatch({
      type: CREATE_MEMBER,
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

export const EDIT_MEMBER_FN = (id, content) => (dispatch) => {
  dispatch(LOADING_ON());
  try {
    const response = editMember(id, content);
    dispatch({
      type: EDIT_MEMBER,
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

export const DELETE_MEMBER_FN = (id) => async (dispatch) => {
  try {
    await deleteMember(id);
    dispatch({
      type: DELETE_MEMBER,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: ACTION_FAILED,
      payload: error.message,
    });
  }
};
