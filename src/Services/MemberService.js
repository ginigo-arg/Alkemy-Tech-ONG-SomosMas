import {
  GET_PRIVATE_API,
  POST_PRIVATE_API,
  DELETE_PRIVATE_API,
  PUT_PRIVATE_API,
} from './privateApiService';

export const getAllMembers = async () => {
  return await GET_PRIVATE_API(process.env.REACT_APP_API_MEMBERS);
};

export const getMember = id => {
  return GET_PRIVATE_API(process.env.REACT_APP_API_MEMBERS, id);
};

export const createMember = data => {
  return POST_PRIVATE_API(process.env.REACT_APP_API_MEMBERS, data);
};

export const editMember = data => {
  return PUT_PRIVATE_API(process.env.REACT_APP_API_MEMBERS, data);
};

export const deleteMember = id => {
  return DELETE_PRIVATE_API(process.env.REACT_APP_API_MEMBERS, id);
};
