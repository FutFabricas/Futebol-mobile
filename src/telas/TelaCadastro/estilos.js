// estilosCadastro.js

import { StyleSheet } from 'react-native';

export const estilosCadastro = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242323',
    justifyContent: 'center',
  },


  viewInputs:{
    paddingHorizontal: 60,
    justifyContent: 'center',
    flexDirection: 'column'
  },

  icone: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  fundoObservacoes:{
    marginHorizontal: 60,
    backgroundColor: 'rgba(146, 195, 87, 0.3)',
    height: 200,
    borderRadius: 10,
  },

  textoObservacoes:{
    color: '#FFF',
    fontFamily: 'InterBold700',
    textAlign: 'center'
  },


  titulo: {
    fontFamily: 'InterTitulos',
    fontSize: 26,
    color: '#92C357',
    marginBottom: 100,
    marginTop: 50,
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
    top:40,
    margin: 20,
    marginRight: 300
  },
});
