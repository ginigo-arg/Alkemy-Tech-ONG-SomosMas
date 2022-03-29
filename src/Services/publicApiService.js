import axios from 'axios';

const baseURL = 'https://ongapi.alkemy.org/api/';

// PARA CENTRALIZAR LOS PARAMETROS DE LOS HEADERS, ETC
const config = {
  Group: 163,
};

// EJEMPLO DE PETICION GET PARA TESTEAR
export const Get = () => {
  axios({
    method: 'get',
    url: 'https://ongapi.alkemy.org/api/activities',
  }).then((res) => console.log(res.data.data));
};

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
