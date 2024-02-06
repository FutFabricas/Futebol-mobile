import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './estilos';

export default function TelaLogin() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botaoVoltar} onPress={() => console.log('Botão Voltar Pressionado')}>
        <Text style={{ color: '#FFF' }}> voltar</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>BEM-VINDO</Text>

      <TextInput
        style={styles.input}
        placeholder="Login"
        placeholderTextColor="#888"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#888"
        secureTextEntry
      />

      <TouchableOpacity style={styles.botao} onPress={() => console.log('Botão Entrar Pressionado')}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.icone} onPress={() => console.log('Ícone Pressionado')}>
        <Image source={require('../../../assets/icondois.png')} style={{ width: 32, height: 32 }} />
      </TouchableOpacity>
    </View>
  );
};
