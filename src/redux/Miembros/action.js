import { getAllMembers } from '../../Services/MemberService';
import { ACTION_FAILED, GET_MIEMBROS } from '../Miembros/types';

export const GET_MEMBERS_FUNCTION = () => async (dispatch) => {
  try {
    const { data } = await getAllMembers();
    dispatch({
      type: GET_MIEMBROS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ACTION_FAILED,
      payload: error.message,
    });
  }
};
