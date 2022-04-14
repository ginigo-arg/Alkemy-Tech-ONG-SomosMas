import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import novedadesReducer from './novedades/reducer';

export const store = createStore(
  combineReducers({
    novedades: novedadesReducer,
    // ...other reducers
  }),
  applyMiddleware(thunk),
);
