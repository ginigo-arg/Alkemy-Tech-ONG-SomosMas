import { DELETE_PRIVATE_API, GET_PRIVATE_API, PATCH_PRIVATE_API, POST_PRIVATE_API } from './privateApiService';

export const getSlides = (id = null) => {
  try {
    const response = GET_PRIVATE_API(`${process.env.REACT_APP_API_SLIDES}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const pathSlides = (id, data) => {
  try {
    const response = PATCH_PRIVATE_API(`${process.env.REACT_APP_API_SLIDES}/${id}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postSlide = (data) => {
  try {
    const response = POST_PRIVATE_API(`${process.env.REACT_APP_API_SLIDES}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteSlide = (id) => {
  try {
    const response = DELETE_PRIVATE_API(`${process.env.REACT_APP_API_SLIDES}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
