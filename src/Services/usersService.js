import { Get, Post } from './publicApiService';
import { DELETE_PRIVATE_API, PUT_PRIVATE_API, PATCH_PRIVATE_API } from './privateApiService';

const urlUsers = process.env.REACT_APP_API_USERS;

export const GetUsers = async (id = null) => {
  const response = await Get(urlUsers, id);
  return response;
};

export const PostUsers = (body) => {
  return Post(urlUsers, body);
};

export const PutUsers = (id, body) => {
  return PUT_PRIVATE_API(urlUsers, id, body);
};

export const PatchUsers = (id, body) => {
  return PATCH_PRIVATE_API(urlUsers, id, body);
};

export const DeleteUsers = (id) => {
  return DELETE_PRIVATE_API(urlUsers, id);
};
