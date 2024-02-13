import { StyleSheet } from 'react-native';

export const estilosConfirmados = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242323',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontFamily: 'Roboto',
    fontSize: 35,
    color: '#FFF',
    height: 150,
    top: 50
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
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#FFF',
    marginBottom: 15,
    bottom: 1
  },
  botaoVoltar: {
    position: 'absolute',
    top: 10,
    left: 20,
    padding: 10,
  }
});