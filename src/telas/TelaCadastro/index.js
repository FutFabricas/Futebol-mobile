import React, {useEffect, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilosCadastro } from './estilos';



export default function TelaCadastro() {
  const navigation = useNavigation();

  const aindaNada = () => {
    alert("NADA ACONTECEU AINDA");
  };

  return (
    
    <View style={estilosCadastro.container}>
      <TouchableOpacity style={estilosCadastro.botaoVoltar} onPress={() => navigation.goBack()}>
        <Text style={{ color: '#FFF' }}> voltar</Text>
      </TouchableOpacity>

      <Text style={estilosCadastro.titulo}>Agende o FUT!</Text>

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


      <TouchableOpacity style={estilosCadastro.botao} onPress={aindaNada}>
        <Text style={estilosCadastro.textoBotao}>Agendar FUT!</Text>
      </TouchableOpacity>
      
    </View>
    
  );
}
