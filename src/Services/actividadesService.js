import axios from 'axios';
import {
  DELETE_PRIVATE_API,
  Patch,
  POST_PRIVATE_API,
  Put,
} from './privateApiService';

const url = 'https://ongapi.alkemy.org/api/activities';

export const getActivities = async (id = null) => {
  try {
    const response = await axios(url, id);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const putActivities = async (id, data) => {
  try {
    const response = await Put(url, id, data);
    return response.success ? response.data : response.message;
  } catch (error) {
    console.log(error);
  }
};

export const patchActivities = async (id, data) => {
  try {
    const response = await Patch(url, id, data);
    return response.success ? response.data : response.message;
  } catch (error) {
    console.log(error);
  }
};

export const postActivities = async (data) => {
  try {
    const response = await POST_PRIVATE_API(url, data);
    return response.success ? response.data : response.message;
  } catch (error) {
    console.log(error);
  }
};

export const deleteActivities = async (id) => {
  try {
    const response = await DELETE_PRIVATE_API(url, id);
    return response.success ? response.data : response.message;
  } catch (error) {
    console.log(error);
  }
};
