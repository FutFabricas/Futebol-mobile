import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './estilos';

export default function TelaLogin() {
  return (
    <View style={styles.container}>
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

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

