import { alertService } from '../../Services/alertService';
import { GET_ACTIVIDAD, CREATE_ACTIVIDAD, DELETE_ACTIVIDAD, FAILED_ACTIVIDAD } from './types';

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

    case DELETE_ACTIVIDAD: {
      return {
        ...state,
        actividades: state.actividades.filter(actividad => actividad.id !== action.payload),
      };
    }

    case FAILED_ACTIVIDAD: {
      const TYPE = 'error';
      return alertService(TYPE, action.payload);
    }

    default:
      return state;
  }
};

export default actividadesReducer;
