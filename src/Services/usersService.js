import { Get, Post } from './publicApiService';
import { Put, DELETE_PRIVATE_API, Patch, GET_PRIVATE_API } from './privateApiService';

const urlUsers = process.env.REACT_APP_API_USERS;

export const getUsers = () => {
  Get(urlUsers);
};

export const GetUsersById = (id) => {
  GET_PRIVATE_API(urlUsers, id);
};

export const PostUsers = (body) => {
  Post(urlUsers, body);
};

export const PutUsers = (id, body) => {
  Put(urlUsers, id, body);
};

export const PatchUsers = (id, body) => {
  Patch(urlUsers, id, body);
};

export const DeleteUsers = (id) => {
  DELETE_PRIVATE_API(urlUsers, id);
};
