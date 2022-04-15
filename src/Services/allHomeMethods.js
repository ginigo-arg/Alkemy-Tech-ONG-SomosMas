import { Get as GET_PUBLIC_API_DATA } from './publicApiService';

export const homeInfo = async () => {
  const { data } = await GET_PUBLIC_API_DATA(
    'https://ongapi.alkemy.org/api/organization',
  );
  return data;
};

export const homeSlides = async (id = null) => {
  const { data } = await GET_PUBLIC_API_DATA(
    'https://ongapi.alkemy.org/api/slides',
    id,
  );
  return data.slice(0, 3);
};

export const homeNews = async (id = null) => {
  const { data } = await GET_PUBLIC_API_DATA(
    'https://ongapi.alkemy.org/api/news',
    id,
  );
  return data;
};
