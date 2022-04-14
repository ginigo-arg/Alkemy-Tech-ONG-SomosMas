import { ACTION_FAILED, CREATE_NOVEDAD, DELETE_NOVEDAD, EDIT_NOVEDAD, GET_NOVEDAD } from './types';

import Swal from 'sweetalert2';

const initialState = {
  novedades: [],
};

const novedadesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NOVEDAD:
      return {
        ...state,
        novedades: [...state.novedades, action.payload],
      };

    case DELETE_NOVEDAD: {
      const { id } = action.payload;
      const filtered = state.novedades.filter(novedad => novedad.id !== id);
      return {
        ...state,
        novedades: filtered,
      };
    }

    case EDIT_NOVEDAD:
      return {
        ...state,
        novedades: state.novedades.map((novedad) => {
          if (novedad.id === action.payload.id) {
            return action.payload;
          }
          return novedad;
        }),
      };

    case GET_NOVEDAD:
      return action.payload;

    case ACTION_FAILED:
      return Swal.fire(action.payload);

    default:
      return state;
  }
};

export default novedadesReducer;
