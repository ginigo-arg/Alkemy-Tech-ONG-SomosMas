import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import actividadesReducer from './actividades/reducer';
import novedadesReducer from './novedades/reducer';

export const store = createStore(
  combineReducers({
    novedades: novedadesReducer,
    actividades: actividadesReducer,
    // ...other reducers
  }),
  applyMiddleware(thunk),
);
