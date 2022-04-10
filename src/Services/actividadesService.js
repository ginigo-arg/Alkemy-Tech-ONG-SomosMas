import {
  DELETE_PRIVATE_API,
  GET_PRIVATE_API,
  Patch,
  POST_PRIVATE_API,
  Put,
} from './privateApiService';

const url = process.env.REACT_APP_API_ACTIVITIES;

export const getActivities = (id = null) => {
  return GET_PRIVATE_API(url, id);
};

export const putActivities = (id, data) => {
  return Put(url, id, data);
};

export const patchActivities = (id, data) => {
  return Patch(url, id, data);
};

export const postActivities = (data) => {
  return POST_PRIVATE_API(url, data);
};

export const deleteActivities = (id) => {
  return DELETE_PRIVATE_API(url, id);
};
