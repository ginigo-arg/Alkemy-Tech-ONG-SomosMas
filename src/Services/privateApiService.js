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
