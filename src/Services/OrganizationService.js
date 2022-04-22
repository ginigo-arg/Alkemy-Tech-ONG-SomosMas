
import {
  GET_PRIVATE_API,
  POST_PRIVATE_API,
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

export const postOrganization = async (data) => {
  try {
    const response = await POST_PRIVATE_API(url, data);
    return response;
  } catch (error) {
    alertService(TYPE, MESSAGE_GET);
  }
};
