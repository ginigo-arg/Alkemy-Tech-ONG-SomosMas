import { alertService } from '../../Services/alertService';
import {
  CREATE_USER,
  DELETE_USER,
  EDIT_USER,
  GET_USER,
  FAILED_USER,
} from './types';

const usersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case DELETE_USER: {
      const { id } = action.payload;
      return {
        ...state,
        users: state.users.filter(user => user.id !== id),
      };
    }

    case EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload.id) {
            return action.payload;
          }
          return user;
        }),
      };

    case GET_USER:
      return {
        ...state,
        users: action.payload,
      };

    case FAILED_USER: {
      return alertService('error', action.payload);
    }

    default:
      return state;
  }
};

export default usersReducer;
