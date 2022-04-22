
import {
  DELETE_PRIVATE_API,
  GET_PRIVATE_API,
  PATCH_PRIVATE_API,
  POST_PRIVATE_API,
  PUT_PRIVATE_API,
} from './privateApiService';
import { Get } from './publicApiService';

import { alertService } from './alertService';

const url = process.env.REACT_APP_API_ACTIVITIES;
const TYPE = 'Error';

const MESSAGE_GET = 'Lo sentimos, hubo un error al obtener las actividades.';
const MESSAGE_PATCH = 'Lo sentimos, hubo un error al editar la actividad.';
const MESSAGE_DELETE = 'Lo sentimos, hubo un error al eliminar la actividad.';

// Front
export const GET_ACTIVITIES_PUBLIC = async (id = null) => {
  const response = await Get(url, id);
  return response;
};

// back
export const getActivities = async (id = null) => {
  try {
    return await GET_PRIVATE_API(url, id);
  } catch (error) {
    alertService(TYPE, MESSAGE_GET);
  }
};

export const putActivities = async (id, data) => {
  const response = await PUT_PRIVATE_API(url, id, data);

  if (response) {
    alertService('success', 'Actividad editada correctamente!');
    return response;
  } else {
    alertService('error', 'Ha ocurrido un error al editar actividad');
    return response.error;
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
  const response = await POST_PRIVATE_API(url, data);

  if (response) {
    alertService('success', 'Actividad creada correctamente!');
    return response;
  } else {
    alertService('error', 'Ha ocurrido un error al crear actividad');
    return response.error;
  }
};

export const deleteActivities = async (id) => {
  try {
    return await DELETE_PRIVATE_API(url, id);
  } catch (error) {
    alertService(TYPE, MESSAGE_DELETE);
  }
};
