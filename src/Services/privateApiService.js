import axios from 'axios';

const verifyTokenExist = () => {
  // Creando el token para la petición
  // localStorage.setItem('TOKEN', '12345alkemy');

  // verificando el token
  const token = localStorage.getItem('TOKEN');

  // creando el header en caso de que exista el token
  if (token) {
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        // Group: 163,
      },
    };
  }
};

const config = verifyTokenExist();

export const GET_PRIVATE_API = async (url, id = null) => {
  let baseURL = `${url}`;

  if (id) {
    baseURL = `${url}/${id}`;
  }

  try {
    const data = await axios.get(baseURL, config);
    return data.data;
  } catch (error) {
    console.log('Error GET privado:', error);
    return error;
  }
  // const { data } = await axios.get(baseURL, config);
  // si la petición fue exitosa...
  // if (data.success) return data.data;

  // si la petición no fue exitosa...
  // throw new Error('No se pudieron obtener los datos');
};

export const PUT_PRIVATE_API = async (url, id, body, config) => {
  try {
    const response = await axios.put(`${url}/${id}`, body, config);
    return response.data;
  } catch (error) {
    console.log('Error PUT privado:', error);
    return error;
  }
};

export const PATCH_PRIVATE_API = async (url, id, body, config) => {
  try {
    const resp = await axios.patch(`${url}/${id}`, body, config);
    const { data } = resp;
    return data;
  } catch (error) {
    console.log('Error PATCH privado:', error);
    return error;
  }
};

export const POST_PRIVATE_API = async (URL, DATA) => {
  try {
    const response = await axios.post(URL, DATA, config);
    return response.data;
  } catch (error) {
    console.log('Error POST privado:', error);
    return error;
  }
};

export const DELETE_PRIVATE_API = async (url, id) => {
  try {
    const borrado = await axios.delete(`${url}/${id}`, config);
    return borrado.data;
  } catch (error) {
    console.log('Error DELETE privado:', error);
    return error;
  }
};
