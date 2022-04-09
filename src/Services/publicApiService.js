import axios from 'axios';

// PARA CENTRALIZAR LOS PARAMETROS DE LOS HEADERS, ETC
const config = {
  Group: 163,
};

export const Get = async (URL, id = null) => {
  const url = id ? `${URL}/${id}` : URL;
  try {
    const response = await axios(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// PETICION POST QUE RECIBE EL PARAMETRO DE LA URL Y EL BODY
export const Post = async (url, body) => {
  try {
    const response = await axios({
      method: 'post',
      url: url,
      config,
      data: body,
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};
