import {
  DELETE_PRIVATE_API,
  GET_PRIVATE_API,
  PUT_PRIVATE_API,
  PATCH_PRIVATE_API,
  POST_PRIVATE_API,
} from './privateApiService';
import { alertService } from './alertService';

export const getNews = async (id = null) => {
  const response = await GET_PRIVATE_API(process.env.REACT_APP_API_NEWS, id);
  let msn = 'las novedades';
  if (id) {
    msn = 'la novedad con identificador ' + id;
  }
  // console.log('Respuesta getNews', response);
  if (response.success) {
    return response.data;
  } else {
    alertService('error', `Ha ocurrido un error al consultar ${msn}`);
    return response.error;
  }
};

export const patchNews = async (id, data) => {
  const response = await PATCH_PRIVATE_API(
    `${process.env.REACT_APP_API_NEWS}/${id}`,
    data,
  );
  // console.log('Respuesta patchNews', response);
  if (response.data) {
    return response;
  } else {
    alertService('error', 'Ha ocurrido un error al intentar realizar cambios en la novedad');
    return response.error;
  }
};

export const putNews = async (id, data) => {
  const response = await PUT_PRIVATE_API(
    `${process.env.REACT_APP_API_NEWS}/${id}`,
    data,
  );
  // console.log('Respuesta putNews', response);
  if (response.data) {
    return response;
  } else {
    alertService('error', 'Ha ocurrido un error al intentar actualizar la novedad');
    return response.error;
  }
};

export const postNews = async (data) => {
  const response = await POST_PRIVATE_API(`${process.env.REACT_APP_API_NEWS}`, data);
  // console.log('Respuesta postNews', response);
  if (response.data) {
    return response;
  } else {
    alertService('error', 'Ha ocurrido un error crear la novedad');
    return response.error;
  }
};

export const deleteNews = async (id) => {
  const response = await DELETE_PRIVATE_API(
    `${process.env.REACT_APP_API_NEWS}/${id}`,
  );
  // console.log('Respuesta deleteNews', response);
  if (response.data) {
    return response;
  } else {
    alertService('error', 'Ha ocurrido un error al intentar eliminar la novedad');
    return response.error;
  }
};
