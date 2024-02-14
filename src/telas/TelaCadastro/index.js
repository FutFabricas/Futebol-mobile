import React, {useEffect, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilosCadastro } from './estilos';
import { createLocal } from '../../service/local';



export default function TelaCadastro() {
  const navigation = useNavigation();
  const [local, setLocal] = useState('');
  const aindaNada = () => {
    alert("NADA ACONTECEU AINDA");
  };

                const salvarLocal = async () => {
                  try {
                    console.log("Adicionando local")
                    const newLocal = await createLocal({ local: local }); //aqui sou eu tentando adicionar o local
                    onPress(newLocal);
                  } catch (error) {
                    console.log(error);
                  }
                };

                const registerLocal = (local) => {
                  console.log("==========",local);
                  setData((ant)=>[...ant,local]);
                }

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
        placeholder="Horário"
        placeholderTextColor="#888"
      />

                <Pressable 
                style={estilosCadastro.botao}
                onPress={() => salvarLocal()}
                >

                <Text style={estilosCadastro.textoBotao}>Agendar FUT!</Text>

                  </Pressable>
       
      
    </View>
    
  );
}
