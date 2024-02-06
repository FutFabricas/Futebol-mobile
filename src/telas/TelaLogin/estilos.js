// estilos.js

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242323',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  titulo: {
    fontFamily: 'Roboto',
    fontSize: 24,
    color: '#FFF',
    marginBottom: 200,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,  // Adiciona uma borda apenas na parte inferior
    borderColor: '#92C357',  // Cor da borda
    marginBottom: 50,
    paddingHorizontal: 10,
    color: '#FFF',  // Cor do texto
  },
  botao: {
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92C357',
    background: 'linear-gradient(to right, #92C357, #6FAF46)',
  },
  textoBotao: {
    color: '#FFF',
    fontFamily: 'Roboto',
  },
});
