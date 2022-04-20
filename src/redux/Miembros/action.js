import { getAllMembers } from '../../Services/MemberService';
import { ACTION_FAILED, GET_MIEMBROS } from '../Miembros/types';

export const GET_MEMBERS_FUNCTION = () => (dispatch) => {
  try {
    const response = getAllMembers();
    dispatch({
      type: GET_MIEMBROS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: ACTION_FAILED,
      payload: error.message,
    });
  }
};
