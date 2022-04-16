import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import actividadesReducer from './actividades/reducer';
import authReducer from './auth/authReducer';
import novedadesReducer from './novedades/reducer';

const store = createStore(
  combineReducers({
    novedades: novedadesReducer,
    actividades: actividadesReducer,
    auth: authReducer,
    // ...other reducers
  }),
  applyMiddleware(thunk),
);

export default store;
