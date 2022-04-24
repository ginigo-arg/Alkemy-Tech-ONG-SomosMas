import { LOGIN_USER, LOGOUT_USER, CREATE_USER, LOGIN_USER_FAILED, CREATE_USER_FAILED, LOGIN_AUTH } from './authTypes';
import { CLEAR_LOCAL_STORAGE } from '../../Services/localStorageService';
import { CREATE_TOKEN, REMOVE_TOKEN } from '../../Services/authService';
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
      if (action.payload) {
        CREATE_TOKEN(JSON.stringify(action.payload.token));
      }
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
      if (!action.payload) {
        REMOVE_TOKEN(action.payload.token);
      }

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
      CLEAR_LOCAL_STORAGE();
      return {
        // auth: initialState,
        state,
      };
    }

    case CREATE_USER: {
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
