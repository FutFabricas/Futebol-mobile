import React, { useState } from 'react';
import { Modal, Text, Pressable, View, TextInput } from 'react-native';
import { styles } from './estilos'
import { createJogador } from '../../service/jogadores';
import { useNavigation } from '@react-navigation/native';


const Modaldoidao = ({ modalVisible, onPress }) => {
  const navigation = useNavigation();
  const [jogador, setJogador] = useState('');
  
  const fecharModal = () => {
    navigation.navigate('TelaConfirmados')
  };

  const salvarNaLista = async () => {
    try{
      const newJogador = await createJogador({name: jogador})
      
      onPress(newJogador)
    }
     catch(error){
      console.log(error)
     }
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome ..."
            placeholderTextColor="black"
            onChangeText={(text) => setJogador(text)}
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={(jogador) => salvarNaLista(jogador)}>
            <Text style={styles.textStyle}>Confirmar Presença!</Text>
          </Pressable>

          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={()=>fecharModal()}
            >
            <Text style={styles.textStyle}>Fechar</Text>
          </Pressable>

        </View>
      </View>
    </Modal>

  );
};

export default Modaldoidao;