import { alertService } from '../../Services/alertService';
import { ACTION_FAILED, GET_SLIDE, CREATE_SLIDE, DELETE_SLIDE } from './types';

const initialState = {
  slides: [],
};
const slidesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SLIDE:
      return action.payload;

    case CREATE_SLIDE:
      return [...state, action.payload];

    case DELETE_SLIDE: {
      return state.filter(slide => slide.id !== action.payload);
    }

    case ACTION_FAILED: {
      const TYPE = 'error';
      return alertService(TYPE, action.payload);
    }

    default:
      return state;
  }
};
export default slidesReducer;
