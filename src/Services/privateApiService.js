import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
    Group: 163, //Aqui va el ID del equipo!!
  },
};

const Get = () => {
  axios
    .get('https://jsonplaceholder.typicode.com/users', config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const Post = async (URL, DATA, TOKEN) => {
  const options = {
    method: 'POST',
    url: URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
      Group: 163,
    },
    data: DATA,
  };
  try {
    const response = await axios(options);
    return response;
  } catch (error) {
    console.log('Error:', error);
  }
};

//export default Get
