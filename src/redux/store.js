import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth/authReducer';
import novedadesReducer from './novedades/reducer';

export const store = createStore(
  combineReducers({
    novedades: novedadesReducer,
    auth: authReducer,
    // ...other reducers
  }),
  applyMiddleware(thunk),
);
