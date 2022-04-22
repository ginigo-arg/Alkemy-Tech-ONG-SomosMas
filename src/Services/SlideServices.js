import { DELETE_PRIVATE_API, GET_PRIVATE_API, PATCH_PRIVATE_API, POST_PRIVATE_API, PUT_PRIVATE_API } from './privateApiService';
import { alertService } from './alertService';

export const getSlides = (id = null) => {
  const response = GET_PRIVATE_API(process.env.REACT_APP_API_SLIDES, id);
  return response;
};

export const pathSlides = (id, data) => {
  const response = PATCH_PRIVATE_API(`${process.env.REACT_APP_API_SLIDES}/${id}`, data);
  return response;
};

export const putSlide = (id, data) => {
  const response = PUT_PRIVATE_API(process.env.REACT_APP_API_SLIDES, id, data);

  if (response) {
    alertService('success', 'Slide editado correctamente!');
    return response;
  } else {
    alertService('error', 'Ha ocurrido un error al editar slide');
    return response.error;
  }
};

export const postSlide = async (data) => {
  const response = await POST_PRIVATE_API(process.env.REACT_APP_API_SLIDES, data);
  console.log('respuesta post:', response);
  if (response) {
    alertService('success', 'Slide creado Correactamente!');
    return response.data;
  } else {
    alertService('error', 'Ha ocurrido un error al crear el slide');
    return response.error;
  }
};

export const deleteSlide = (id) => {
  const response = DELETE_PRIVATE_API(process.env.REACT_APP_API_SLIDES, id);
  if (response) {
    alertService('success', 'Slide eliminado correctamente!');
    return response;
  } else {
    alertService('error', 'Ha ocurrido un error al eliminar el slide');
    return response.error;
  }
};
