import { LOGIN_USER, LOGOUT_USER, CREATE_USER, LOGIN_USER_FAILED, CREATE_USER_FAILED, LOGIN_AUTH } from './authTypes';
import { alertService } from '../../Services/alertService';

const initialState = {
  auth: false,
  token: '',
  user: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
    {
      // console.log('soy el reducer LOGIN', action.payload);
      return action.payload
        ? {
          ...state,
          auth: true,
          token: action.payload.token,
          user: action.payload.user,
        }
        : { state };
    }

    case LOGIN_AUTH:
    {
      // console.log('soy el reducer AUTH', action.payload);
      return action.payload
        ? {
          ...state,
          auth: true,
          token: action.token,
          user: action.payload.user,
        }
        : { state };
    }

    case LOGOUT_USER: {
      localStorage.clear();
      return {
        // auth: initialState,
        state,
      };
    }

    case CREATE_USER: {
      // console.log('soy el reducer CREATE', action.payload);
      return action.payload
        ? {
          ...state,
          auth: false,
          token: action.payload.token,
          user: action.payload.user,
        }
        : { state };
    }

    case LOGIN_USER_FAILED: {
      return alertService('error', action.payload);
    }

    case CREATE_USER_FAILED:
    {
      return alertService('error', action.payload);
    }

    default: {
      return state;
    }
  }
};

export default authReducer;
