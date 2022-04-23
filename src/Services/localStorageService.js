import { alertService } from './alertService';

export const GET_FROM_LOCAL_STORAGE = (Key) => {
  if (Key) {
    if (localStorage[Key] !== undefined) {
      return localStorage.getItem(Key);
    } else {
      alertService('error', `No exite el elemento (${Key}) en el local storage.`);
    }
  } else {
    alertService('error', 'No se pudo obtener el elemento del local storage, se requiere la key.');
  }
  return '';
};

export const CREATE_IN_LOCAL_STORAGE = (Key, value) => {
  if (Key && value) {
    localStorage.setItem(Key, value);
    return true;
  } else {
    alertService('error', 'No se pudo crear el elemento en el local storage, se requiere la key y el valor.');
    return false;
  }
};

export const REMOVE_FROM_LOCAL_STORAGE = (Key) => {
  if (Key) {
    if (localStorage[Key] !== undefined) {
      localStorage.removeItem(Key);
      return true;
    }
  } else {
    alertService('error', 'No se pudo eliminar el elemento del local storage, se requiere la key.');
  }
  return false;
};

export const CHECK_IN_LOCAL_STORAGE = (Key) => {
  if (Key) {
    // console.log(localStorage[Key]);
    if (localStorage[Key] !== undefined) {
      return true;
    } else {
      return false;
    }
  } else {
    alertService('error', 'No se pudo verificar el elemento en el local storage, se requiere la key.');
    return false;
  }
};

export const CLEAR_LOCAL_STORAGE = () => {
  localStorage.clear();
};
