import { DELETE_PRIVATE_API, GET_PRIVATE_API, PATH_PRIVATE_API, POST_PRIVATE_API } from './privateApiService';

export const getCategory = (id = '') => {
  const response = GET_PRIVATE_API(`${process.env.REACT_APP_API_CATEGORY}/${id}`);
  return response;
};

export const pathCategory = (id, data) => {
  console.log(`${process.env.REACT_APP_API_CATEGORY}`);
  const response = PATH_PRIVATE_API(`${process.env.REACT_APP_API_CATEGORY}/${id}`, data);

  return response;
};

export const postCategory = (data) => {
  const response = POST_PRIVATE_API(`${process.env.REACT_APP_API_CATEGORY}`, data);
  return response;
};

export const deleteCategory = (id) => {
  const response = DELETE_PRIVATE_API(`${process.env.REACT_APP_API_CATEGORY}/${id}`);
  return response;
};
