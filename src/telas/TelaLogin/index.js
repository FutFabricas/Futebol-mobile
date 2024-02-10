import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import { styles } from './estilos';



export default function TelaLogin({ navigation }) {
  const goToTab = () => {
    navigation.navigate('Tabs')
}
  
  
  return (
    
    <View style={styles.container}>
      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.goBack()}>
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

    <TouchableOpacity style={styles.botao} onPress={goToTab}>
      <Text style={styles.textoBotao}> ENTRAR </Text>
    </TouchableOpacity>

    </View>
  );
};
