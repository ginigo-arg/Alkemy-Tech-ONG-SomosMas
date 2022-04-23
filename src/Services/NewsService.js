import {
  DELETE_PRIVATE_API,
  GET_PRIVATE_API,
  PUT_PRIVATE_API,
  PATCH_PRIVATE_API,
  POST_PRIVATE_API,
} from './privateApiService';
import { alertService } from './alertService';

export const getNews = async (id = null) => {
  try {
    const response = await GET_PRIVATE_API(process.env.REACT_APP_API_NEWS, id);
    return response;
  } catch (error) {
    alertService('error', 'Lo sentimos! Error al recuperar datos');
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
  const response = await PUT_PRIVATE_API(process.env.REACT_APP_API_NEWS, id, data);

  if (response) {
    alertService('success', 'Novedad editada correctamente!');
    return response;
  } else {
    alertService('error', 'Ha ocurrido un error al intentar actualizar la novedad');
    return response.error;
  }
};

export const postNews = async (data) => {
  const response = await POST_PRIVATE_API(`${process.env.REACT_APP_API_NEWS}`, data);
  // console.log('Respuesta postNews', response);
  if (response) {
    alertService('success', 'Novedad creada correctamente!');
    return response;
  } else {
    alertService('error', 'Ha ocurrido un error crear la novedad');
    return response.error;
  }
};

export const deleteNews = (id) => {
  const response = DELETE_PRIVATE_API(process.env.REACT_APP_API_NEWS, id);

  if (response) {
    alertService('success', 'Novedad eliminada correctamente!');
    return response;
  } else {
    alertService('error', 'Ha ocurrido un error al intentar eliminar la novedad');
    return response.error;
  }
};
