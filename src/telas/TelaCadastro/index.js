import { View, Text, TextInput, TouchableOpacity, Image, ScrollView,Pressable} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { estilosCadastro } from './estilos';
import { updateFutMarcado } from '../../service/horario';
import { ID_HORARIO } from '../../help/const';


export default function TelaCadastro() {

  const navigation = useNavigation();
  const [local, setLocal] = useState('');
  const [horario, setHorario] = useState('');
  
  const salvarLocaleHorario = async () => {
    try {
      console.log("===================Adicionando local e horário");
      // Chama a função para criar local e horário
      const newHorario = await updateFutMarcado({ local: local, horario: horario, id: ID_HORARIO});
      
      navigation.navigate('Fut Marcado',{ local, horario });

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <View style={estilosCadastro.container}>

      <View style={estilosCadastro.icone}>
        <TouchableOpacity style={estilosCadastro.botaoVoltar} onPress={() => navigation.goBack()}>
            <Image source={require('../../../assets/img_voltarTelaFutMarcado.png')}/>
          </TouchableOpacity>
      
          <Text style={estilosCadastro.titulo}>Agende o FUT!</Text>
      </View>
        
   
    <View style={estilosCadastro.centralizar}>

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


     </View>
     
  )};
