import { ACTION_FAILED, CREATE_NOVEDAD, DELETE_NOVEDAD, EDIT_NOVEDAD, GET_NOVEDAD } from './types';

import Swal from 'sweetalert2';

const initialState = [{
  id: null,
  name: '',
  slug: null,
  content: '',
  image: '',
  user_id: null,
  category_id: null,
  created_at: '',
  updated_at: '',
  deleted_at: null,
  group_id: null,
}];

const novedadesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NOVEDAD:
      return [...state, action.payload];

    case DELETE_NOVEDAD:
      return state.filter(novedad => novedad.id !== action.payload.id);

    case EDIT_NOVEDAD:
      return state.map((novedad) => {
        if (novedad.id === action.payload.id) {
          return action.payload;
        }
        return novedad;
      });

    case GET_NOVEDAD:
      return action.payload;

    case ACTION_FAILED:
      return Swal.fire(action.payload);

    default:
      return state;
  }
};

export default novedadesReducer;
