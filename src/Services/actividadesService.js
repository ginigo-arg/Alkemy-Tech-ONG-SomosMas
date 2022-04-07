import {
  DELETE_PRIVATE_API,
  GET_PRIVATE_API,
  Patch,
  POST_PRIVATE_API,
  Put,
} from './privateApiService';

const url = process.env.REACT_APP_API_ACTIVITIES;

export const getActivities = (id = null) => {
  const response = GET_PRIVATE_API(url, id);
  return response;
};

export const putActivities = (id, data) => {
  const response = Put(url, id, data);
  return response;
};

export const patchActivities = (id, data) => {
  const response = Patch(url, id, data);
  return response;
};

export const postActivities = (data) => {
  const response = POST_PRIVATE_API(url, data);
  return response;
};

export const deleteActivities = (id) => {
  const response = DELETE_PRIVATE_API(url, id);
  return response;
};
