import axios from 'axios';

const URL = process.env.EXPO_PUBLIC_URL

export async function getFutMarcado() {
    const response = await axios.get(`${URL}/fut_marcado`);
    return response.data;
  }


export async function getFutMarcadoByid(id) {
  const response = await axios.get(`${URL}/fut_marcado/${id}`);
  return response.data;
}


export async function updateFutMarcado(fut_marcado) {
const response = await axios.put(`${URL}/fut_marcado/${fut_marcado.id}`,fut_marcado);
return response.data;
}



