import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import actividadesReducer from './actividades/reducer';
import authReducer from './auth/authReducer';
import novedadesReducer from './novedades/reducer';
import { categoriesReducer } from './categories/reducer';
import membersReducer from './Miembros/reducer';

const store = createStore(
  combineReducers({
    novedades: novedadesReducer,
    actividades: actividadesReducer,
    categories: categoriesReducer,
    auth: authReducer,
    miembros: membersReducer,
    // ...other reducers
  }),
  applyMiddleware(thunk),
);

export default store;
