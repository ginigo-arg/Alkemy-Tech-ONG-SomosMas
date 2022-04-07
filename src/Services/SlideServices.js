import { DELETE_PRIVATE_API, GET_PRIVATE_API, PATCH_PRIVATE_API, POST_PRIVATE_API } from './privateApiService';

export const getSlides = async (id = null) => {
  try {
    const response = await GET_PRIVATE_API(`${process.envREACT_APP_API_SLIDES}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const pathSlides = async (id, data) => {
  try {
    const response = await PATCH_PRIVATE_API(`${process.envREACT_APP_API_SLIDES}/${id}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postSlide = async (data) => {
  try {
    const response = await POST_PRIVATE_API(`${process.envREACT_APP_API_SLIDES}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteSlide = async (id) => {
  try {
    const response = await DELETE_PRIVATE_API(`${process.envREACT_APP_API_SLIDES}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
