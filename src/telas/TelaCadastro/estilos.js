// estilosCadastro.js

import { StyleSheet } from 'react-native';

export const estilosCadastro = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242323',
    alignItems: 'center'
  },

  icone: {
    
  },


  centralizar: {
    justifyContent:'center',
    paddingHorizontal: 100
  },

  titulo: {
    fontFamily: 'InterTitulos',
    fontSize: 30,
    color: '#fff',
    marginBottom: 80,
    marginTop: 80,
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
    width: 270,
    height: 55,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92C357',
    background: 'linear-gradient(to right, #92C357, #6FAF46)',
    marginVertical: 40,
    marginTop: 100,
    borderRadius: 20
  },
  textoBotao: {
    fontSize: 20,
    color: '#FFF',
    fontFamily: 'InterBold700',
  },
  botaoVoltar: {
    top:20,
    marginRight: 300
  },
});
