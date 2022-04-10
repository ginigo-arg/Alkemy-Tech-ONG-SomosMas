import { Get, Post } from './publicApiService';
import { Put, DELETE_PRIVATE_API, Patch, GET_PRIVATE_API } from './privateApiService';

const urlUsers = process.env.REACT_APP_API_USERS;

export const GetUsers = () => {
  return Get(urlUsers);
};

export const GetUsersById = (id) => {
  return GET_PRIVATE_API(urlUsers, id);
};

export const PostUsers = (body) => {
  return Post(urlUsers, body);
};

export const PutUsers = (id, body) => {
  return Put(urlUsers, id, body);
};

export const PatchUsers = (id, body) => {
  return Patch(urlUsers, id, body);
};

export const DeleteUsers = (id) => {
  return DELETE_PRIVATE_API(urlUsers, id);
};
