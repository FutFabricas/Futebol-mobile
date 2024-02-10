import React, {useEffect} from "react";
import { Alert, View, Text, Image, SafeAreaView, StatusBar, Button, Touchable, TouchableOpacity, BackHandler } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './estilos';


export default function Home( { navigation } ) {
    
    const botaoCapitao = () => {
        alert("O CAPITÃO CAGOU NAS CALÇAS")
        navigation.navigate('Login')
    }
    const goToTab = () => {
        navigation.navigate('Tabs')
    }
    const fecharApp = () => {
        // Exibe o alerta quando o usuário pressiona o botão para fechar o app
        Alert.alert('Confirmação', 'Deseja fechar o aplicativo?', [
          {
            text: 'Cancelar',
            onPress: () => null,
            style: 'cancel',
          },
          {
            text: 'Sair',
            onPress: () => BackHandler.exitApp(),
          },
        ]);
      };
    

    return <>
        <StatusBar backgroundColor={'#6FAF46'} />
        <View style={styles.home_topo} >
            <TouchableOpacity
                style={styles.botao_home_topo}
                onPress={fecharApp}
            >
                <Image
                    source={
                        require('../../../assets/icon_sair.png')}
                    style={{ width: 36, height: 36 }}

                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botao_home_topo}
                onPress={() => botaoCapitao()}
            >
                <Image
                    source={require('../../../assets/icon_capitaocolorido32.png')}
                />
                <Text
                    style={styles.texto_botao_home_topo}>
                    CAPITÃO

                </Text>
            </TouchableOpacity>
        </View>

        <View
            style={styles.home_topo_titulo}
        >
            <Text
                style={styles.titulo}>
                BEM-VINDO, JOGADOR!
            </Text>
        </View>

        <View style={styles.container}>
            <TouchableOpacity style={styles.botao_home} onPress={() => goToTab()}>
                <Text style={styles.texto_botao}>VEM PRO FUT!</Text>
            </TouchableOpacity>
        </View>
    </>


}