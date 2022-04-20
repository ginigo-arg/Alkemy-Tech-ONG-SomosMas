import { alertService } from '../../Services/alertService';
import { ACTION_FAILED, GET_MEMBERS, CREATE_MEMBER, DELETE_MEMBER } from './types';

const initialState = {
  miembros: [],
};

const membersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEMBERS:
      return action.payload;

    case CREATE_MEMBER:
      return [...state, action.payload];

    case DELETE_MEMBER: {
      return state.filter(miembro => miembro.id !== action.payload);
    }

    case ACTION_FAILED: {
      const TYPE = 'error';
      return alertService(TYPE, action.payload);
    }

    default:
      return state;
  }
};
export default membersReducer;