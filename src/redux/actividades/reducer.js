import { alertService } from '../../Services/alertService';
import { GET_ACTIVIDAD, EDIT_ACTIVIDAD, CREATE_ACTIVIDAD, DELETE_ACTIVIDAD, FAILED_ACTIVIDAD } from './types';
const initialState = {
  actividades: [],
};

const actividadesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTIVIDAD:
      return {
        ...state,
        actividades: action.payload,
      };

    case CREATE_ACTIVIDAD:
      return {
        ...state,
        actividades: [...state.actividades, action.payload],
      };

    case EDIT_ACTIVIDAD:
      return {
        ...state,
        actividades: state.novedades.map((actividad) => {
          if (actividad.id === action.payload.id) {
            return action.payload;
          }
          return actividad;
        },
        ),
      };

    case DELETE_ACTIVIDAD: {
      const id = action.payload.id;
      const filter = state.actividades.filter(actividad => actividad.id !== id);
      return {
        ...state,
        actividades: filter,
      }; }

    case FAILED_ACTIVIDAD: {
      const TYPE = 'error';
      return alertService(TYPE, action.payload);
    }

    default:
      return state;
  }
};

export default actividadesReducer;
