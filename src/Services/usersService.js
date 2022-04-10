import { Get, Post } from './publicApiService';
import { Put, DELETE_PRIVATE_API } from './privateApiService';

const urlUsers = process.env.REACT_APP_API_USERS;

export const getUsers = () => {
  Get(urlUsers);
};

export const GetUsersById = (id) => {
  Get(urlUsers, id);
};

export const PostUsers = (body) => {
  Post(urlUsers, body);
};

export const PutUsers = (id, body) => {
  Put(urlUsers, id, body);
};

export const DeleteUsers = (id) => {
  DELETE_PRIVATE_API(urlUsers, id);
};
