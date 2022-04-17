import {
  DELETE_PRIVATE_API,
  GET_PRIVATE_API,
  PATCH_PRIVATE_API,
  POST_PRIVATE_API,
  PUT_PRIVATE_API,
} from './privateApiService';

const url = process.env.REACT_APP_API_ACTIVITIES;

export const getActivities = (id = null) => {
  const resp = GET_PRIVATE_API(url, id);
  return resp;
};

export const putActivities = (id, data) => {
  return PUT_PRIVATE_API(url, id, data);
};

export const patchActivities = (id, data) => {
  return PATCH_PRIVATE_API(url, id, data);
};

export const postActivities = (data) => {
  return POST_PRIVATE_API(url, data);
};

export const deleteActivities = (id) => {
  return DELETE_PRIVATE_API(url, id);
};
