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

export const POST_PRIVATE_API = async (URL, DATA) => {
  // const options = {
  //   method: 'POST',
  //   url: URL,
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${TOKEN}`,
  //     Group: 163,
  //   },
  //   data: DATA,
  // };
  try {
    const response = await axios.post(URL,DATA,config);
    return response;
  } catch (error) {
    console.log('Error:', error);
    return error;
  }
};