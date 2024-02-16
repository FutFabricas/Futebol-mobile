import { StyleSheet } from 'react-native';

export const estilosConfirmados = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242323',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fundoInfo:{
    marginVertical:0,
    justifyContent: 'center',
    backgroundColor: '#28530C',
    height: 580,
    width: 300,
    borderRadius: 20,

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
    marginBottom:20,
    fontFamily: 'InterBold700',
    color: '#fff',
  },

  textoInformativo2:{
    textAlign:'center',
    marginBottom:20,
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
  
  botaoVoltar:{
    marginVertical: 20,
    marginRight: 300,
  },

  botaoAdicionar: {
    marginHorizontal:30,
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
  
});
