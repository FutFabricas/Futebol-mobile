import { StyleSheet } from 'react-native';

export const estilosConfirmados = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242323',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fundoInfo:{
    marginVertical: 30,
    justifyContent: 'center',
    backgroundColor: '#28530C',
    height: 820,
    width: 300,
    borderRadius: 20,

  },

  fundoObs: {
    margin: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: 210,
    width: 280, 
    borderRadius: 50,

  },


  titulo: {
    fontFamily: 'InterTitulos',
    fontSize: 22,
    color: 'white',
    height: 50
},
  icones: {
    margin: 20,
    flexDirection: 'row',
    gap: 30
  },

  textoInformativo: {
    fontSize: 18,
    fontFamily: 'InterBold700',
    color: '#fff',
  },

  textoInformativo2:{
    marginHorizontal: 60,
    fontSize: 16,
    fontFamily: 'InterRegular',
    color: '#fff',
  },


  textoObs: {
    marginVertical: 60,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'InterBold700',
    color: '#fff',
  },
  
  textoCaixaOBS:{
    margin: 20,
    justifyContent: 'center',
    fontFamily: 'InterRegular',
    fontSize: 16,
    color: '#fff',

  },

  botaoVoltar:{
    marginVertical: 20,
    marginRight: 300,
  },

  botaoAdicionar: {
    margin: 25,
    width: 250,
    height: 55,
    borderRadius: 25,
    // backgroundColor: '#789461',
    backgroundColor: '#A4D767',
    justifyContent: 'center',
    alignItems: 'center',

  },
  textoBotaoAdicionar: {
    color: '#FFF',
    fontFamily: 'InterBold700',
    fontSize: 20,
  },
  textoConfirmados: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#FFF',
    marginBottom: 15,
    bottom: 100
  }
});
