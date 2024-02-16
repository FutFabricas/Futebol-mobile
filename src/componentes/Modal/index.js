import React, { useState } from 'react';
import { Modal, Text, Pressable, View, TextInput, Button } from 'react-native';
import { styles } from './estilos';
import { createJogador, getJogadores } from '../../service/jogadores';


const Modaldoidao = ({ modalVisible, onPress }) => {
  
  const [jogador, setJogador] = useState('');

  const fecharModal = () => {
    console.log("===========Fechar modal");
    onPress(null); // Passa null para indicar que o modal está sendo fechado sem adicionar um novo jogador
  };

  const salvarNaLista = async () => {
    try {
      const newJogador = await createJogador({ name: jogador });
      onPress(newJogador);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={fecharModal}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="white" 
            onChangeText={(text) => setJogador(text)}
          />
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => salvarNaLista()}>
            <Text style={styles.textStyle}>Confirmar Presença!</Text>
          </Pressable>

          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={fecharModal}
          >
            <Text style={styles.textStyle_fechar}>Fechar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default Modaldoidao;
