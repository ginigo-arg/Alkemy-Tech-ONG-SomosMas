import { TYPES } from './types';
import { alertService } from '../../Services/alertService';

export const initialState = {
  categories: [],
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CREATE_CATEGORIE: {
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    }

    case TYPES.GET_CATEGORIE: {
      return {
        ...state,
        categories: action.payload,
      };
    }

    case TYPES.GET_ALL_CATEGORIE: {
      return action.payload;
    }

    case TYPES.EDIT_CATEGORIE: {
      return {
        ...state,
        categories: state.categories.map((category) => {
          if (category.id === action.payload.id) {
            return action.payload;
          }
          return category;
        }),
      };
    }

    case TYPES.DELETE_CATEGORIE: {
      return {
        ...state,
        categories: state.categories.filter(category => category.id !== action.payload),
      };
    }

    case TYPES.ERROR: {
      return alertService('error', action.payload);
    }

    default:
      return state;
  }
};
