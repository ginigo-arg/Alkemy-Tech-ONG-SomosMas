import {
  DELETE_PRIVATE_API,
  GET_PRIVATE_API,
  PATCH_PRIVATE_API,
  POST_PRIVATE_API,
  PUT_PRIVATE_API,
} from './privateApiService';
import { Get } from './publicApiService';
const url = process.env.REACT_APP_API_ACTIVITIES;

// Front
export const GET_ACTIVITIES_PUBLIC = async (id = null) => {
  const response = await Get(url, id);
  return response;
};

// Back
export const getActivities = (id = null) => {
  const res = GET_PRIVATE_API(url, id);
  return res.data;
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
