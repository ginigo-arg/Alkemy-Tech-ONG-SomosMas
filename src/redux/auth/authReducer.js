import { LOGIN_USER, LOGOUT_USER, CREATE_USER, LOGIN_USER_FAILED, CREATE_USER_FAILED } from './authTypes';
import Swal from 'sweetalert2';

const initialState = {
  auth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOGIN_USER:
    return {
      auth: action.payload,
    };

  case LOGOUT_USER:
    return {
      auth: initialState,
    };

  case CREATE_USER:
    return {
      auth: action.payload,
    };

  case LOGIN_USER_FAILED:
    return Swal.fire(action.payload);

  case CREATE_USER_FAILED:
    return Swal.fire(action.payload);

  default:
    return state;
  }
};

export default authReducer;
