import { GET_ABOUT, USABOUTUS_ERROR } from './types';
import Swal from 'sweetalert2';

const initialState = {
  organization: [],
};

const usReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ABOUT: {
      return action.payload;
    }

    case USABOUTUS_ERROR: {
      return Swal.fire(action.payload);
    }

    default:
      return state;
  }
};
export default usReducer;
