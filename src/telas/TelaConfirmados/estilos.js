import { StyleSheet } from 'react-native';

export const estilosConfirmados = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242323',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icone:{
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo: {
    fontFamily: 'InterTitulos',
    fontSize: 32,
    color: '#FFF',
    height: 40,
},
  botaoAdicionar: {
    width: 35,
    height: 35,
    borderRadius: 25,
    backgroundColor: '#92C357',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'center',
    top: 1

  },
  textoBotaoAdicionar: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: 24,
  },
  textoConfirmados: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#FFF',
    marginBottom: 15,
    bottom: 100
  },
  botao: {
    height: 40,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92C357',
    background: 'linear-gradient(to right, #92C357, #6FAF46)',
    marginTop: 50,
    borderRadius: 20
  },
  textoBotao: {
    color: '#FFF',
    fontFamily: 'Roboto',
  },
  querojogar: {
    fontFamily: 'InterBold700',
    fontSize: 16,
    color: '#FFF',
    marginTop: 10,
  },
  botaoVoltar: {
    marginRight: 300,
    marginVertical: 10
  }
});