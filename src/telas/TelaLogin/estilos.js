// estilos.js

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242323',
    justifyContent: 'center',
    paddingHorizontal: 60,
  },
  titulo: {
    fontFamily: 'InterTitulos',
    fontSize: 32,
    color: '#FFF',
    marginBottom: 100,
    textAlign: 'center'
  },
  input: {
    height: 40,
    borderBottomWidth: 5,
    borderColor: '#92C357',
    marginBottom:70,
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
    marginTop: 80,
    borderRadius: 20
  },
  textoBotao: {
    color: '#FFF',
    fontFamily: 'Roboto',
  },
  botaoVoltar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 300,
    marginTop: 30
  },
  
});
