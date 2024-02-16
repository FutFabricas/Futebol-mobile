import {
    StyleSheet
  } from 'react-native';


export const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 1,
    
    },
    modalView: {
      margin: 20,
      backgroundColor: '#000000',
      borderRadius: 10,
      height: 380,
      width: 350,
      padding: 100,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 10,
      elevation: 5,
    },
    button: {
      borderRadius: 15,
      padding: 15,
      elevation: 10,
      marginBottom: 10
    },
    buttonOpen: {
      backgroundColor: 'green',
    },
    buttonClose: {
      backgroundColor: 'green',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      width: 200
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    input: {
      fontSize:17,
      height: 50,
      borderBottomWidth: 3,
      borderColor: 'green',
      marginBottom:50,
      paddingHorizontal: 10,
      color: '#fff',


    },
      absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    });
    


