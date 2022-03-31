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

export const Put = async (id, Authorization, data) => {
  const options = {
    url: `${proccess.env.REACT_APP_API_CATEGORY}/${id}`,
    method: 'PUT',
    headers: {
      Group: null,
      Authorization,
    },
    body: { id, data },
  };

  try {
    const resp = await axios(options);
    return {
      resp,
    };
  } catch (error) {
    console.log('error catch:', error);
  }
};
