import {
  GET_PRIVATE_API,
  PUT_PRIVATE_API,
} from './privateApiService';

import { alertService } from './alertService';

const url = process.env.REACT_APP_API_ORGANIZATION;
const TYPE = 'Error';

const MESSAGE_GET = 'Lo sentimos, hubo un error al obtener los datos publicos de la organizacion.';

export const getOrganization = async () => {
  try {
    const response = await GET_PRIVATE_API(url);
    return response;
  } catch (error) {
    alertService(TYPE, MESSAGE_GET);
  }
};

export const editOrganization = async data => {
  const response = PUT_PRIVATE_API(process.env.REACT_APP_API_ORGANIZATION, 1, data);

  if (response) {
    alertService('success', 'Datos de organización han sido editados correctamente!');
    return response;
  } else {
    alertService('error', 'Ha ocurrido un error al editar los datos de organización');
    return response.error;
  }
};
