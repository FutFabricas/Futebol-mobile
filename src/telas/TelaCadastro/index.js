import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilosCadastro } from './estilos';
import { createHorario } from '../../service/horario';


export default function TelaCadastro() {

  const navigation = useNavigation();
  const [local, setLocal] = useState('');
  const [horario, setHorario] = useState('');


  const salvarLocaleHorario = async () => {
    try {
      console.log("===================Adicionando local e horário");
      // Chama a função para criar local e horário
      const newHorario = createHorario({ local: local, horario: horario});

      navigation.navigate('TelaFutMarcado',{ local, horario });

    } catch (error) {
      console.log(error);
    }
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
        onChangeText={(text) => setLocal(text)}
      />


      <TextInput
        style={estilosCadastro.input}
        placeholder="Data e Hora"
        placeholderTextColor="#888"
        onChangeText={(text) => setHorario(text)}
      />

      <Pressable
        style={estilosCadastro.botao}
        onPress={() => salvarLocaleHorario()}
      >
        <Text style={estilosCadastro.textoBotao}>Agendar FUT!</Text>
      </Pressable>


    </View>

  );
}
