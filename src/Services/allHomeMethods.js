import { Get as GET_PUBLIC_API_DATA } from './publicApiService';

export const homeWelcomeText = () => 'Bienvenido a Somos Mas';

export const homeSlides = async (id) => {
  return await GET_PUBLIC_API_DATA(process.env.REACT_APP_API_SLIDES_GET, id);
};

export const homeNews = async (id) => {
  return await GET_PUBLIC_API_DATA(process.env.REACT_APP_API_NEW_GET, id);
};
