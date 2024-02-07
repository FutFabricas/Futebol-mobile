import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import { styles } from './estilos';
import { useNavigation } from '@react-navigation/native';
import TelaCadastro from '../TelaCadastro';


export default function TelaLogin() {
  const navigation = useNavigation();
  const handleEntrar = () => {
    navigation.navigate('TelaCadastro');
    console.log('Botão Entrar Pressionado');
  };
  
  
  return (
    <View style={styles.container}>
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

      <TouchableOpacity style={styles.botao} onPress={handleEntrar}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
      
        <Button title="Navegar" onPress={handleEntrar}/>
      

      {/* <TouchableOpacity style={styles.icone} onPress={() => console.log('Ícone Pressionado')}>
        <Image source={require('../../../assets/icondois.png')} style={{ width: 32, height: 32 }} />
      </TouchableOpacity> */} 
    </View>
  );
};
