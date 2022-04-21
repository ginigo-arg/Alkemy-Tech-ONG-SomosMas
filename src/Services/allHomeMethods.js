import { Get as GET_PUBLIC_API_DATA } from './publicApiService';

export const homeInfo = async () => {
  const response = await GET_PUBLIC_API_DATA(
    'https://ongapi.alkemy.org/api/organization',
  );
  return response;
};

export const homeSlides = async (id = null) => {
  const response = await GET_PUBLIC_API_DATA(
    'https://ongapi.alkemy.org/api/slides',
    id,
  );
  return response.slice(0, 5);
};

export const homeNews = async (id = null) => {
  const response = await GET_PUBLIC_API_DATA(
    'https://ongapi.alkemy.org/api/news',
    id,
  );
  return response;
};
