import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import actividadesReducer from './actividades/reducer';
import novedadesReducer from './novedades/reducer';
import { categoriesReducer } from './categories/reducer';

export const store = createStore(
  combineReducers({
    novedades: novedadesReducer,
    actividades: actividadesReducer,
    categories: categoriesReducer,
    // ...other reducers
  }),
  applyMiddleware(thunk),
);
