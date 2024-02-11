import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilosConfirmados } from './estilos';


export default function TelaFutMarcado() {

   const navigation = useNavigation();

   const botaoAdicionarNome = () => {
    alert("Você vai pra tela de adicionar seu nome")
   }

  return (
    <View style={estilosConfirmados.container}>

      <Text style={estilosConfirmados.titulo}>DADOS DO FUT DA SEMANA</Text>
    
      
      <Text style={estilosConfirmados.textoConfirmados}>Data: </Text>
      <Text style={estilosConfirmados.textoConfirmados}>Hora: </Text>
      <Text style={estilosConfirmados.textoConfirmados}>Endereço: </Text>
      <Text style={estilosConfirmados.textoConfirmados}>Preço: </Text>
      <Text style={estilosConfirmados.textoConfirmados}>Máximo de Jogadores: </Text>
      
        
        
        
        
        
      <TouchableOpacity style={estilosConfirmados.botaoAdicionar} onPress={botaoAdicionarNome}>
        <Text style={estilosConfirmados.textoBotaoAdicionar}>+</Text>
        {/* <Text style={estilos.} >Eu vou!</Text> */}
      </TouchableOpacity>
    </View>
  );
}
