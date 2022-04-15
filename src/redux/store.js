import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import novedadesReducer from './novedades/reducer';
import { usReducer } from './Nosotros/reducers';
export const store = createStore(
  combineReducers({
    novedades: novedadesReducer,
    usAbout: usReducer,
  }),
  applyMiddleware(thunk),
);
