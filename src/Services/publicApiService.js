import axios from 'axios';

const config = {
  headers: {
    //group: 163, //Aqui va el ID del equipo!!
  },
};

const Get = async (URL, id = null) => {
  const url = id ? `${URL}/${id}` : URL;
  try {
    const response = await axios(url, config);
    return response
  } catch (error) {
    console.log(error);
  }
};


export default Get;
