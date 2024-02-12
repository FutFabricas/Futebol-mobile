import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import { styles } from './estilos';



export default function TelaLogin({ navigation }) {
      
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');

      const botaoEntrar = () => {
       
        if (username === 'A' && password === 'A') {
         
          Alert.alert('Vamos marcar esse fut, insira os dados e avise a galera!');
          navigation.navigate('Tabs');
        } else {
          
          Alert.alert('Senha incorreta');
        }
      };
  
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
        onChangeText={(text) => setUsername(text)}
      />

      <TextInput           
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#888"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

    <TouchableOpacity style={styles.botao} onPress={botaoEntrar}>
      <Text style={styles.textoBotao}> ENTRAR </Text>
    </TouchableOpacity>

    </View>



  );
};
