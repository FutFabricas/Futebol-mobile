import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from 'react-native';
import { styles } from './estilos'
import { createJogador } from '../../service/jogadores';


const Modaldoidao = ({ modalVisible, onPress }) => {
  const [jogador, setJogador] = useState('');

  const salvarNaLista = async () => {
    try{
      await createJogador({name: jogador})
      onPress()
    }
     catch(error){
      console.log(error)
     }
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            placeholder="Participar"
            placeholderTextColor="#888"
            onChangeText={(text) => setJogador(text)}
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => salvarNaLista()}>
            <Text style={styles.textStyle}>Confirmar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>

  );
};

export default Modaldoidao;