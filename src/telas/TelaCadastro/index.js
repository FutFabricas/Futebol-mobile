import React, {useEffect, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilosCadastro } from './estilos';



export default function TelaCadastro() {
  const navigation = useNavigation();

  const handleAgendarPress = () => {
    alert("FUT MARCADO!!");
  };

  return (
    <ScrollView>
    <View style={estilosCadastro.container}>
      <View style={estilosCadastro.icone}>
        <TouchableOpacity style={estilosCadastro.botaoVoltar} onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/img_voltarTelaFutMarcado.png')}/>
        </TouchableOpacity>
      </View>
      

      <View style={estilosCadastro.icone}>
        <Text style={estilosCadastro.titulo}>Agende o FUT!</Text>
        </View>

      <View style={estilosCadastro.viewInputs}>
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
      </View>
      <View style={estilosCadastro.fundoObservacoes}>
        <Text style={estilosCadastro.textoObservacoes}>Observações:</Text>
      </View>
   
      <View style={estilosCadastro.icone}> 
      <TouchableOpacity style={estilosCadastro.botao} onPress={handleAgendarPress}>
        <Text style={estilosCadastro.textoBotao}>Agendar FUT!</Text>
      </TouchableOpacity>
      </View>
      
      
   </View>
   </ScrollView>

    )};
