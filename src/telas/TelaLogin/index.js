import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import { styles } from './estilos';
import { useNavigation } from '@react-navigation/native';
import TelaCadastro from '../TelaCadastro';


export default function TelaLogin() {
  const navigation = useNavigation();

  const irParaTelaSecundaria = () => {
    navigation.navigate(TelaCadastro);
  };
  
  return (
      

    
    <View style={styles.container}>
      <Button title="Navegaar" onPress={irParaTelaSecundaria}/>
      <TouchableOpacity style={styles.botaoVoltar} onPress={() => console.log('Botão Voltar Pressionado')}>
        <Text style={{ color: '#FFF' }}> voltar</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>BEM-VINDO, CAPITÃO!</Text>

      <TextInput
        style={styles.input}
        placeholder="Login"
        placeholderTextColor="#888"
      />

      <TextInput           
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#888"
        secureTextEntry
      />

      <TouchableOpacity style={styles.botao} onPress={TelaCadastro}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
        
      
       
        
  

      {/* <TouchableOpacity style={styles.icone} onPress={() => console.log('Ícone Pressionado')}>
        <Image source={require('../../../assets/icondois.png')} style={{ width: 32, height: 32 }} />
      </TouchableOpacity> */} 
    </View>
  );
};