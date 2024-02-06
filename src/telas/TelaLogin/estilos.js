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
    borderBottomWidth: 1,
    borderColor: '#92C357',
    marginBottom: 50,
    paddingHorizontal: 10,
    color: '#FFF',
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
