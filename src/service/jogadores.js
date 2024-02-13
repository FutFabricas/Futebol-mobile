import axios from 'axios';

const URL = process.env.EXPO_PUBLIC_URL

export async function getJogadores() {
    const response = await axios.get(`${URL}/jogadores`);
    return response.data;
  }

export async function createJogador(jogador) {
const response = await axios.post(`${URL}/jogadores`,jogador);
return response.data;
}

export async function deleteJogadores(id) {
    const response = await axios.delete(`${URL}/jogadores/${id}`);
  
    return response.data;
}