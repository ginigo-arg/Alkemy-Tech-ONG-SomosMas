import { GET_PRIVATE_API, POST_PRIVATE_API, DELETE_PRIVATE_API, Put as PUT_PRIVATE_API } from './privateApiService';

export const getAllMembers = () => {
  return GET_PRIVATE_API(process.env.REACT_APP_API_MEMBERS_GET);
};

export const getMember = id => {
  return GET_PRIVATE_API(process.env.REACT_APP_API_MEMBERS_GET, id);
};

export const createMember = data => {
  return POST_PRIVATE_API(process.env.REACT_APP_API_MEMBERS_POST, data);
};

export const editMember = data => {
  return PUT_PRIVATE_API(process.env.REACT_APP_API_MEMBERS_PUT, data);
};

export const deleteMember = id => {
  return DELETE_PRIVATE_API(process.env.REACT_APP_API_MEMBERS_DELETE, id);
};
