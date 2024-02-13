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
      backgroundColor: 'white',
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
      width: 150
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    input: {
      fontSize: 24,
      backgroundColor: 'lightgreen', // Cor de fundo verde claro
      borderRadius: 10, // Raio da borda para torná-la arredondada
      shadowColor: 'black', // Cor da sombra
      shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
      shadowOpacity: 0.3, // Opacidade da sombra
      shadowRadius: 4, // Raio da sombra
      elevation: 2, // Sombreamento para Android
      color: 'black', // Cor do texto
      paddingBottom: 10, // Espaçamento na parte inferior
      paddingHorizontal: 10, // Espaçamento horizontal
      margin: 20, // Margem ao redor do componente
      width: 350, // Aumento da largura para 300 (ajuste conforme necessário)
      textAlign: 'center',

    }
  });

