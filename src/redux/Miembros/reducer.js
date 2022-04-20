import { alertService } from '../../Services/alertService';
import { ACTION_FAILED, GET_MIEMBROS } from './types';

const initialState = {
  miembros: [],
};

const membersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MIEMBROS:
      return action.payload;

    case ACTION_FAILED: {
      const TYPE = 'error';
      return alertService(TYPE, action.payload);
    }

    default:
      return state;
  }
};
export default membersReducer;
