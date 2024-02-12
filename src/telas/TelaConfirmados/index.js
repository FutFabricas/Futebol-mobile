import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilosConfirmados } from './estilos';


export default function TelaConfirmados() {

   const navigation = useNavigation();

   const botaoAdicionarNome = () => {
    window.alert("oi")
   }

  return (
    <View style={estilosConfirmados.container}>

      <Text style={estilosConfirmados.titulo}>Lista de Confirmados:</Text>

      
      <Text style={estilosConfirmados.textoConfirmados}>Neymar Jr.</Text>
      <Text style={estilosConfirmados.textoConfirmados}>Lionel Messi</Text>
      <Text style={estilosConfirmados.textoConfirmados}>Cristiano Ronaldo</Text>
      <Text style={estilosConfirmados.textoConfirmados}>Kylian Mbappé</Text>
      <Text style={estilosConfirmados.textoConfirmados}>Robert Lewandowski</Text>
      <Text style={estilosConfirmados.textoConfirmados}>Kevin De Bruyne</Text>
      <Text style={estilosConfirmados.textoConfirmados}>Virgil van Dijk</Text>
      <Text style={estilosConfirmados.textoConfirmados}>Sergio Ramos</Text>
      <Text style={estilosConfirmados.textoConfirmados}>Luka Modrić</Text>
        
        
        
        
        
        
      <TouchableOpacity style={estilosConfirmados.botaoAdicionar} onPress={botaoAdicionarNome}>
        <Text style={estilosConfirmados.textoBotaoAdicionar}>+</Text>
        {/* <Text style={estilos.} >Eu vou!</Text> */}
      </TouchableOpacity>
    </View>
  );
}
