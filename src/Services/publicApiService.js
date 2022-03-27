import axios from 'axios';

const config = {
  headers: {
    Group: 163, //Aqui va el ID del equipo!!
  },
};

const Get = async (URL, id = null) => {
  const url = id ? `${URL}/${id}` : URL;
  console.log(url);
  try {
    const res = await axios.get(url, config);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export default Get;
