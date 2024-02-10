import React, {useEffect} from "react";
import { Alert, View, Text, Image, SafeAreaView, StatusBar, Button, Touchable, TouchableOpacity, BackHandler } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './estilos';


export default function Home( { navigation } ) {
    
    const botaoCapitao = () => {
        alert("Digite seu Login e Senha")
        navigation.navigate('Login')
    }
    const goToTab = () => {
        navigation.navigate('Tabs')
    }
    const fecharApp = () => {
        // obg chatgpt
        Alert.alert('Sair do FutFábricas?', 'Não esqueça de levar o colete!', [
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
                {/* <Text style={{ color: '#FFF' }}> sair</Text> */}
                <Image
                    source={
                        require('../../../assets/icon_sair.png')}
                    style={{ width: 29 , height: 29 }}

                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botao_home_topo}
                onPress={() => botaoCapitao()}
            >
                <Image
                    
                    source={require('../../../assets/icon_capitaocolorido32.png')}
                    style={{width: 29, height: 29}}
                    
                />
                <Text
                    style={styles.texto_botao_home_topo}>
                    

                </Text>
            </TouchableOpacity>
        </View>

        <View
            style={styles.home_topo_titulo}
        >
            <Text
                style={styles.titulo}>
                FUT-FÁBRICAS
            </Text>
        </View>

        <View style={styles.container}>
            <TouchableOpacity style={styles.botao_home} onPress={() => goToTab()}>
                <Text style={styles.texto_botao}>VEM PRO FUT!</Text>
            </TouchableOpacity>
        </View>
    </>


}