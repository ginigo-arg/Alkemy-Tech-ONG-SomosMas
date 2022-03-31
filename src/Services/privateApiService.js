import axios from 'axios';

const config = {
  headers: {
    Group: 01, //Aqui va el ID del equipo!!
  },
};

const Get = () => {
  axios
    .get('https://jsonplaceholder.typicode.com/users', config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default Get;

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
