import axios from 'axios';

const URL = process.env.EXPO_PUBLIC_URL

export async function getLocal() {
    const response = await axios.get(`${URL}/fut_marcado`);
    return response.data;
  }

export async function createLocal(local) {
const response = await axios.post(`${URL}/fut_marcado`,local);
return response.data;
}

export async function deleteLocais(id) {
    const response = await axios.delete(`${URL}/fut_marcado/${id}`);
  
    return response.data;
}