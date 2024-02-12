import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilosConfirmados } from './estilos';


export default function TelaConfirmados() {

   const navigation = useNavigation();

   const botaoAdicionarNome = () => {
    window.alert("oi")
   }

   //seção do banco de dados
   const [user,setJogador]=useState(null);

  //enviar os dados do formulário para o back
  async function registerJogador()
  {
   console.log("essa função foi acionada eu quero me matar")
  }





  return (
    <View style={estilosConfirmados.container}>

      <Text style={estilosConfirmados.titulo}>Lista de Confirmados:</Text>

      
      <Text style={estilosConfirmados.textoConfirmados}>Neymar Jr.</Text>
      <Text style={estilosConfirmados.textoConfirmados}>Lionel Messi</Text>
      <Text style={estilosConfirmados.textoConfirmados}>Cristiano Ronaldo</Text>
     
        
        
        
        
        
        
      <TouchableOpacity style={estilosConfirmados.botaoAdicionar} onPress={registerJogador}>
        <Text style={estilosConfirmados.textoBotaoAdicionar}>+</Text>
      </TouchableOpacity>
      <TextInput
        style={estilosConfirmados.input}
        placeholder="QUERO JOGAR!"
        placeholderTextColor="#888"
        onChangeText={(text)=>setJogador(text)}
      />
     
      
    </View>
  );
}
