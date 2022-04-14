import {
  DELETE_PRIVATE_API,
  GET_PRIVATE_API,
  PATCH_PRIVATE_API,
  POST_PRIVATE_API,
} from './privateApiService';

export const getNews = (id = null) => {
  const response = GET_PRIVATE_API(process.env.REACT_APP_API_NEWS, id);
  return response;
};

export const patchNews = (id, data) => {
  const response = PATCH_PRIVATE_API(
    `${process.env.REACT_APP_API_NEWS}/${id}`,
    data,
  );
  return response;
};

export const postNews = (data) => {
  const response = POST_PRIVATE_API(`${process.env.REACT_APP_API_NEWS}`, data);
  return response;
};

export const deleteNews = (id) => {
  const response = DELETE_PRIVATE_API(
    `${process.env.REACT_APP_API_NEWS}/${id}`,
  );
  return response;
};
