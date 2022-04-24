import { Get, Post } from './publicApiService';
import { alertService } from './alertService';
import { CHECK_IN_LOCAL_STORAGE, CREATE_IN_LOCAL_STORAGE, GET_FROM_LOCAL_STORAGE, REMOVE_FROM_LOCAL_STORAGE } from './localStorageService';

export const CHECK_TOKEN = () => {
  return CHECK_IN_LOCAL_STORAGE('TOKEN');
};

export const GET_TOKEN = () => {
  if (CHECK_TOKEN) {
    return GET_FROM_LOCAL_STORAGE('TOKEN');
  } else {
    return '';
  };
};

export const CREATE_TOKEN = (token) => {
  if (token) {
    CREATE_IN_LOCAL_STORAGE('TOKEN', token);
  } else {
    alertService('error', 'No se pudo crear el token, se requiere un valor.');
  }
};

export const REMOVE_TOKEN = () => {
  REMOVE_FROM_LOCAL_STORAGE('TOKEN');
};

export const REGISTER = async (data) => {
  const response = await Post(process.env.REACT_APP_API_AUTH_REGISTER, data);
  if (response.data) {
    alertService('success', 'Cuenta creada');
    return response.data;
  } else {
    if (response.response) {
      alertService('error', 'No se pudo crear la cuenta: Los datos proporcionados no son válidos o ya existe una cuenta utilizando el email suministrado');
    } else {
      alertService('error', 'Ha ocurrido un error al enviar los datos');
    }
    return '';// response.error;
  }
};

export const LOGIN = async (data) => {
  const response = await Post(process.env.REACT_APP_API_AUTH_LOGIN, data);
  if (response.data) {
    return response.data;
  } else {
    if (response.error === 'No token') {
      alertService('error', 'Usuario y/o contraseña incorrecta');
    } else {
      alertService('error', 'Ha ocurrido un error al enviar los datos');
    }
    return '';// response.error;
  }
};

export const AUTH = async (TOKEN) => {
  const response = await Get(process.env.REACT_APP_API_AUTH_ME, null, TOKEN);
  if (response) {
    return response;
  }
  return '';
};
