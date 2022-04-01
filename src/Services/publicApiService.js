import axios from 'axios';

const baseURL = 'https://ongapi.alkemy.org/api/';

// PARA CENTRALIZAR LOS PARAMETROS DE LOS HEADERS, ETC
const config = {
  Group: 163,
};

const Get = () => {
  axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

export default Get;

// PETICION POST QUE RECIBE EL PARAMETRO DE LA URL Y EL BODY
export const Post = async (url, body) => {
  try {
    await axios({
      method: 'post',
      baseURL: baseURL,
      url: url,
      config,
      data: body,
    }).then((res) => console.log(res));
  } catch (err) {
    console.log(err);
  }
};
