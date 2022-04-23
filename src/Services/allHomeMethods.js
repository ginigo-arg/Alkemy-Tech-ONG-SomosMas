import { Get as GET_PUBLIC_API_DATA } from './publicApiService';

export const homeSlides = async (id = null) => {
  const response = await GET_PUBLIC_API_DATA(
    process.env.REACT_APP_API_SLIDES,
    id,
  );
  return response.slice(-5);
};

export const homeNews = async (id = null) => {
  const response = await GET_PUBLIC_API_DATA(
    process.env.REACT_APP_API_NEWS,
    id,
  );
  return response.slice(-3);
};
