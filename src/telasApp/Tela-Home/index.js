import React from "react";
import {SafeAreaView, Text,StatusBar,View, ImageBackground,Button, Alert} from 'react-native';
import estilos from "../../estilo/estilos";



export default function HomeApp(){
    return (
        <SafeAreaView  style = {estilos.container}>  
            <StatusBar/>

              

                <ImageBackground 
                source ={require('../../../assets/img_home.png')}
                style = {estilos.imagem_home}>

                <Button 
                title="VAMOS JOGAR"
                onPress={() => Alert.alert('Botão Apertado POHA')}
                style = {estilos.botao_home}
                />
                

                    
                </ImageBackground>
                

            
        
            </SafeAreaView>
    );

    
                  
}   