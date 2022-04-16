import { LOGIN_USER, LOGOUT_USER, CREATE_USER, LOGIN_USER_FAILED, CREATE_USER_FAILED } from './authTypes';
import { alertService } from '../../Services/alertService';

const initialState = {
  auth: false,
  token: null,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
    case CREATE_USER:
      localStorage.setItem('token', action.payload.data.token);
      localStorage.setItem('user', action.payload.data.user);
      return {
        auth: true,
        token: action.payload.data.token,
        user: action.payload.data.user,
      };

    case LOGOUT_USER:
      localStorage.clear();
      return {
        auth: false,
        token: null,
        user: null,
      };

    case LOGIN_USER_FAILED:
    case CREATE_USER_FAILED:
      return alertService('error', action.payload);

    default:
      return state;
  }
};

export default authReducer;
