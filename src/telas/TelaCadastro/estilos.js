// estilosCadastro.js

import { StyleSheet } from 'react-native';

export const estilosCadastro = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242323',
    justifyContent: 'center',
    paddingHorizontal: 60,
  },
  titulo: {
    fontFamily: 'Roboto',
    fontSize: 24,
    color: '#FFF',
    marginBottom: 150,
    textAlign: 'center'
  },
  input: {
    height: 60,
    borderBottomWidth: 5,
    borderColor: '#92C357',
    marginBottom: 30,
    paddingHorizontal: 9,
    color: '#FFF',
  },
  botao: {
    height: 40,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92C357',
    background: 'linear-gradient(to right, #92C357, #6FAF46)',
    marginTop: 100,
    borderRadius: 20
  },
  textoBotao: {
    color: '#FFF',
    fontFamily: 'Roboto',
  },
  botaoVoltar: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
  },
  icone: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 32,
    height: 32,
  },
});
