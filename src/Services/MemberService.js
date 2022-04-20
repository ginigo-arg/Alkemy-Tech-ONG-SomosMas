import { alertService } from './alertService';
import {
  GET_PRIVATE_API,
  POST_PRIVATE_API,
  DELETE_PRIVATE_API,
  PUT_PRIVATE_API,
} from './privateApiService';

export const getAllMembers = async () => {
  return await GET_PRIVATE_API(process.env.REACT_APP_API_MEMBERS);
};

export const getMember = id => {
  return GET_PRIVATE_API(process.env.REACT_APP_API_MEMBERS, id);
};

export const createMember = data => {
  const response = POST_PRIVATE_API(process.env.REACT_APP_API_MEMBERS, data);

  if (response) {
    alertService('success', 'Miembro creado correctamente!');
    return response;
  } else {
    alertService('error', 'Ha ocurrido un error al crear miembro');
    return response.error;
  }
};

export const editMember = (id, data) => {
  const response = PUT_PRIVATE_API(process.env.REACT_APP_API_MEMBERS, id, data);

  if (response) {
    alertService('success', 'Miembro editado correctamente!');
    return response;
  } else {
    alertService('error', 'Ha ocurrido un error al editar miembro');
    return response.error;
  }
};

export const deleteMember = id => {
  const response = DELETE_PRIVATE_API(process.env.REACT_APP_API_MEMBERS, id);

  if (response) {
    alertService('success', 'Miembro eliminado correctamente!');
    return response;
  } else {
    alertService('error', 'Ha ocurrido un error al eliminar miembro');
    return response.error;
  }
};
