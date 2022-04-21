import axios from 'axios';

// PARA CENTRALIZAR LOS PARAMETROS DE LOS HEADERS, ETC
const config = {
  Group: 163,
};

export const Get = async (URL, id = null) => {
  const url = id ? `${URL}/${id}` : URL;
  try {
    const { data } = await axios(url);
    return data.data;
  } catch (error) {
    return error;
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
    return response.data;
  } catch (err) {
    console.log('Error POST public', err);
    return err;
  }
};
