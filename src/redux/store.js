import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import actividadesReducer from './actividades/reducer';
import authReducer from './auth/authReducer';
import novedadesReducer from './novedades/reducer';
import { categoriesReducer } from './categories/reducer';
import membersReducer from './Miembros/reducer';
import usReducer from './Nosotros/reducer';
import globalReducer from './global/globalReducer';
import usersReducer from './users/reducer';
import slidesReducer from './slides/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { LOGIN_AUTH_ME_ACTION } from './auth/authActions';

// const TOKEN = localStorage.getItem('TOKEN');

// const authMeMiddleware = (dispatch) => {
//   return (dispatch) => dispatch(LOGIN_AUTH_ME_ACTION(TOKEN));
// };

// const customMiddleWare = store => next => action => {
//   authMeMiddleware(store.dispatch);
//   next(action);
// };

// const store = createStore(
//   combineReducers({
//     novedades: novedadesReducer,
//     actividades: actividadesReducer,
//     categories: categoriesReducer,
//     auth: authReducer,
//     miembros: membersReducer,
//     organizacion: usReducer,
//     global: globalReducer,
//     users: usersReducer,
//     slides: slidesReducer,
//     // ...other reducers
//   }),
//   composeWithDevTools(applyMiddleware(thunk, customMiddleWare))
//   ,
// );

const store = createStore(
  combineReducers({
    novedades: novedadesReducer,
    actividades: actividadesReducer,
    categories: categoriesReducer,
    auth: authReducer,
    miembros: membersReducer,
    organizacion: usReducer,
    global: globalReducer,
    users: usersReducer,
    slides: slidesReducer,
    // ...other reducers
  }),
  composeWithDevTools(applyMiddleware(thunk))
  ,
);

export default store;
