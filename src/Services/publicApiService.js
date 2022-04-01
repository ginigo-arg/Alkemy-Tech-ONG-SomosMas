import axios from 'axios';

const baseURL = 'https://ongapi.alkemy.org/api/';

// PARA CENTRALIZAR LOS PARAMETROS DE LOS HEADERS, ETC
const config = {
  Group: 163,
};

export const Get = async (URL, id = null) => {
  const url = id ? `${URL}/${id}` : URL;
  try {
    const response = await axios(url);
    return response;
  } catch (error) {
    console.log(error);
  }
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
