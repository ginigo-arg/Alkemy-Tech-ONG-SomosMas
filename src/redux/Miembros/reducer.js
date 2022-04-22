import { alertService } from '../../Services/alertService';
import { ACTION_FAILED, GET_MEMBERS, CREATE_MEMBER, DELETE_MEMBER, EDIT_MEMBER, GET_ONE_MEMBER } from './types';

const initialState = {
  miembros: [],
  memberSelected: null,
};

const membersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEMBERS:
      return {
        ...state,
        miembros: action.payload,
      };

    case GET_ONE_MEMBER:
      return {
        ...state,
        memberSelected: action.payload,
      };

    case CREATE_MEMBER:
      return {
        ...state,
        miembros: [...state.miembros, action.payload],
      };

    case EDIT_MEMBER:
      return {
        ...state,
        miembros: state.miembros.map((miembro) => {
          if (miembro.id === action.payload.id) {
            return action.payload;
          }
          return miembro;
        }),
      };

    case DELETE_MEMBER: {
      return {
        ...state,
        miembros: state.miembros.filter(miembro => miembro.id !== action.payload),
      };
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
