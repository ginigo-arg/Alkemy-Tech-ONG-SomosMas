import {
  DELETE_PRIVATE_API,
  Patch,
  POST_PRIVATE_API,
  Put,
} from './privateApiService';
import { Get } from './publicApiService';

const url = 'https://ongapi.alkemy.org/api/activities';

export const getActivities = async (url, id = null) => {
  try {
    const response = await Get(url, id);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const putActivities = async (id, data) => {
  try {
    const response = await Put(url, id, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const patchActivities = async (id, data) => {
  try {
    const response = await Patch(url, id, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postActivities = async (data) => {
  try {
    const response = await POST_PRIVATE_API(url, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteActivities = async (id) => {
  try {
    const response = await DELETE_PRIVATE_API(url, id);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
