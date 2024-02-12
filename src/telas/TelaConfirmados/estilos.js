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
    height: 300
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
  }
});
