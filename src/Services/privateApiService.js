import axios from 'axios';

const verifyTokenExist = () => {
  const token = localStorage.getItem('TOKEN');
  if (token) {
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        Group: 163,
      },
    };
  } else {
    throw new Error('No token exist in LocalStorage');
  }
};

const config = verifyTokenExist();
export const GET_PRIVATE_API = async (url, id = null) => {
  if (id) {
    const data = await axios.get(`${url}/${id}`, config);
    const response = JSON.parse(data);

    const res = response.data ?? new Error(response.message);

    return res;
  }

  if (!id) {
    const data = await axios.get(url, config);
    const response = JSON.parse(data);

    const res = response.data ?? new Error(response.message);

    return res;
  }

  return new Error('Error en la petición');
};

export const PUT_PRIVATE_API = async (url, id, body, config) => {
  try {
    const resp = await axios.put(`${url}/${id}`, body, config);
    const { data } = resp;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const PATCH_PRIVATE_API = async (url, id, body, config) => {
  try {
    const resp = await axios.patch(`${url}/${id}`, body, config);
    const { data } = resp;

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const POST_PRIVATE_API = async (URL, DATA) => {
  try {
    const response = await axios.post(URL, DATA, config);
    return response;
  } catch (error) {
    console.log('Error:', error);
    return error;
  }
};

export const DELETE_PRIVATE_API = async (url, id) => {
  try {
    const borrado = await axios.delete(`${url}/${id}`, config);
    return borrado.data;
  } catch (error) {
    console.log('Error', 'Ocurrio un  error al borrar', error);
    return error;
  }
};
