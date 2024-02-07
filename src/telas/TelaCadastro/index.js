// TelaCadastro.js

import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilosCadastro } from './estilos';

export default function TelaCadastro() {
  const navigation = useNavigation();

  const handleAgendarPress = () => {
    // Ação a ser executada quando o botão "Agendar FUT!" for pressionado
    console.log('Botão Agendar FUT! Pressionado');
  };

  return (
    <View style={estilosCadastro.container}>
      <TouchableOpacity style={estilosCadastro.botaoVoltar} onPress={() => navigation.goBack()}>
        <Text style={{ color: '#FFF' }}> voltar</Text>
      </TouchableOpacity>

      <Text style={estilosCadastro.titulo}>Agende FUT!</Text>

      <TextInput
        style={estilosCadastro.input}
        placeholder="Local"
        placeholderTextColor="#888"
      />

      <TextInput
        style={estilosCadastro.input}
        placeholder="Horário"
        placeholderTextColor="#888"
      />

      <TextInput
        style={estilosCadastro.input}
        placeholder="Preço"
        placeholderTextColor="#888"
      />

      <TextInput
        style={estilosCadastro.input}
        placeholder="Número de Jogadores"
        placeholderTextColor="#888"
      />

      <TouchableOpacity style={estilosCadastro.botao} onPress={handleAgendarPress}>
        <Text style={estilosCadastro.textoBotao}>Agendar FUT!</Text>
      </TouchableOpacity>
    </View>
  );
}
