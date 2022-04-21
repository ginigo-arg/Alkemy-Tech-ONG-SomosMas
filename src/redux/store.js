import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import actividadesReducer from './actividades/reducer';
import authReducer from './auth/authReducer';
import novedadesReducer from './novedades/reducer';
import { categoriesReducer } from './categories/reducer';
import membersReducer from './Miembros/reducer';
import usReducer from './Nosotros/reducer';
import globalReducer from './global/globalReducer';
import slidesReducer from './slides/reducer';

const store = createStore(
  combineReducers({
    novedades: novedadesReducer,
    actividades: actividadesReducer,
    categories: categoriesReducer,
    auth: authReducer,
    miembros: membersReducer,
    organizacion: usReducer,
    global: globalReducer,
    slides: slidesReducer,
    // ...other reducers
  }),
  applyMiddleware(thunk),
);

export default store;
