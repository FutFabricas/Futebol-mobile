import axios from 'axios';

const URL = process.env.EXPO_PUBLIC_URL

export async function getHorario() {
    const response = await axios.get(`${URL}/fut_marcado`);
    return response.data;
  }

export async function createHorario(horario) {
const response = await axios.post(`${URL}/fut_marcado`,horario);
return response.data;
}

export async function deleHorarios(id) {
    const response = await axios.delete(`${URL}/fut_marcado/${id}`);
  
    return response.data;
}