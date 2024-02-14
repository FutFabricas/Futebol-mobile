import React, {useEffect, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilosCadastro } from './estilos';
import { createLocal } from '../../service/local';
import { createHorario } from '../../service/horario';


export default function TelaCadastro() {

  const navigation = useNavigation();
  const [local, setLocal] = useState('');
  const [horario, setHorario] = useState('');

  

                // const salvarLocaleHorario = async () => {
                //   try {
                //     console.log("Adicionando local")
                //     const newHorario = await createHorario ({ horario: horario});
                //     onPress(newHorario);
                //     const newLocal = await createLocal({ local: local }); //aqui sou eu tentando adicionar o local
                //     onPress(newLocal);
                //   } catch (error) {
                //     console.log(error);
                //   }
                // };
                //ACIMA FOI A PRIMEIRA TENTATIVA E DEU ERRADO

                const salvarLocaleHorario = () => {
                  try {
                    console.log("Adicionando local e horário");
                    navigation.navigate('Tabsegundo');
                    
                    // Chama a função para criar horário
                    const newHorario = createHorario({ horario: horario, local: local });
                    
                    // Chama a função para criar local
                    // const newLocal = createLocal({ local: local });
                    
                    // Executa a ação onPress com ambas as informações
                    onPress(newHorario);
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
