import React from "react";
            
import { Alert, View, Text, Image, StatusBar, TouchableOpacity, BackHandler } from "react-native";
import { styles } from './estilos';

export default function Home( { navigation } ) {
    
    const botaoCapitao = () => {
        navigation.navigate('Login')
    }
    const goToFut = () => {
        navigation.navigate('Tabsegundo')
    }
    const fecharApp = () => {
        
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
                <Image
                    source={
                        require('../../../assets/icon_sair.png')}
                    style={{ width: 30 , height: 30 }}

                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botao_home_topo}
                onPress={() => botaoCapitao()}
            >
                <Image
                    
                    source={require('../../../assets/icon_capitaocolorido32.png')}
                    style={{width: 32, height: 32}}
                    
                />
            </TouchableOpacity>
        </View>

        <View
            style={styles.home_topo_titulo}
        >
            
            <Text
                style={styles.titulo}>
                <Image source={require('../../../assets/bola-1.png')}/>
                FUTIBA<Text style={styles.tituloApp}>App</Text>
            </Text>
        </View>
                    
                
        <View style={styles.container}> 
            <TouchableOpacity style={styles.botao_home} onPress={() => goToFut()}>
                <Text style={styles.texto_botao}>IR PRO FUT!</Text>
            </TouchableOpacity>
        </View>
    </>

}