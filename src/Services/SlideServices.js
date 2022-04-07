import { DELETE_PRIVATE_API, GET_PRIVATE_API, PATCH_PRIVATE_API, POST_PRIVATE_API } from './privateApiService';

export const getSlides = (id = null) => {
  const response = GET_PRIVATE_API(`${process.env.REACT_APP_API_SLIDES}/${id}`);
  return response.data;
};

export const pathSlides = (id, data) => {
  const response = PATCH_PRIVATE_API(`${process.env.REACT_APP_API_SLIDES}/${id}`, data);
  return response.data;
};

export const postSlide = (data) => {
  const response = POST_PRIVATE_API(`${process.env.REACT_APP_API_SLIDES}`, data);
  return response.data;
};

export const deleteSlide = (id) => {
  const response = DELETE_PRIVATE_API(`${process.env.REACT_APP_API_SLIDES}/${id}`);
  return response.data;
};
