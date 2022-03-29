import axios from 'axios';

// TODO: importar el método autorización de Nico

const config = {
  headers: {
    Authorization: '',
    // TODO: AGREGA LA AUTORIZACIÓN DE NICO
  },
};

export const GET_PRIVATE_API = async (url, id = null) => {
  if (id) {
    const data = await axios.get(url + id, config);
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
