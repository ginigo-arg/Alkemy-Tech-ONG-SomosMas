import { Get, Post } from './publicApiService';
import { alertService } from './alertService';

export const REGISTER = async (data) => {
  const response = await Post(process.env.REACT_APP_API_AUTH_REGISTER, data);
  // console.log('Respuesta REGISTER', response);
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
  // console.log('Respuesta LOGIN', response);
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
  const response = await Get(process.env.REACT_APP_API_AUTH_ME, '', TOKEN);
  // console.log('Respuesta AUTH', response);
  if (response.data) {
    return response.data;
  } else {
    if (response.data.success === false) {
      alertService('error', 'Token invalido');
    } else {
      alertService('error', 'Ha ocurrido un error al consultar el token');
    }
    return ''; // response.error;
  }
};
