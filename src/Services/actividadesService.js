
import {
  DELETE_PRIVATE_API,
  GET_PRIVATE_API,
  PATCH_PRIVATE_API,
  POST_PRIVATE_API,
  PUT_PRIVATE_API,
} from './privateApiService';

import { alertService } from './alertService';

const url = process.env.REACT_APP_API_ACTIVITIES;
const TYPE = 'Error';

const MESSAGE_GET = 'Lo sentimos, hubo un error al obtener las actividades.';
const MESSAGE_PUT = 'Lo sentimos, hubo un error al editar la actividad.';
const MESSAGE_PATCH = 'Lo sentimos, hubo un error al editar la actividad.';
const MESSAGE_POST = 'Lo sentimos, hubo un error al agregar una nuevo actividad.';
const MESSAGE_DELETE = 'Lo sentimos, hubo un error al eliminar la actividad.';

export const getActivities = (id = null) => {
  const resp = GET_PRIVATE_API(url, id);
  return resp;
};

export const putActivities = async (id, data) => {
  try {
    return await PUT_PRIVATE_API(url, id, data);
  } catch (error) {
    alertService(TYPE, MESSAGE_PUT);
  }
};

export const patchActivities = async (id, data) => {
  try {
    return await PATCH_PRIVATE_API(url, id, data);
  } catch (error) {
    alertService(TYPE, MESSAGE_PATCH);
  }
};

export const postActivities = async (data) => {
  try {
    return await POST_PRIVATE_API(url, data);
  } catch (error) {
    alertService(TYPE, MESSAGE_POST);
  }
};

export const deleteActivities = async (id) => {
  try {
    return await DELETE_PRIVATE_API(url, id);
  } catch (error) {
    alertService(TYPE, MESSAGE_DELETE);
  }
};
