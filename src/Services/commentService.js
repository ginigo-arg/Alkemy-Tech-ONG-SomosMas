import { GET_PRIVATE_API } from './privateApiService';

const url = process.env.REACT_APP_API_COMMENTS;

export const getComments = () => {
  return GET_PRIVATE_API(url);
};
