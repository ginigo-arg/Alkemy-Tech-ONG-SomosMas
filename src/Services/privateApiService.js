import axios from 'axios';

const config = {
  headers: {
    Group: 01, //Aqui va el ID del equipo!!
  },
};

export const Get = () => {
  axios
    .get('https://jsonplaceholder.typicode.com/users', config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const Put = async (url, body, config) => {
  try {
    const resp = await axios.put(url, body, config);
    const { data } = resp;
    return {
      data,
    };
  } catch (error) {
    console.log(error);
  }
};
