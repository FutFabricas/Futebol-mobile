import React from "react";
import { View, Text, SafeAreaView,StatusBar, Button, Touchable, TouchableOpacity} from "react-native";
import {styles }from './estilos';

export default function Home(){
    return (
        <View style = {styles.container}>
            <Text style = {styles.titulo}>BEM-VINDO, JOGADOR!</Text>
            <TouchableOpacity style = {styles.botao_home}>
                <Text style = {styles.texto_botao}> FUTEBOL MARCADO!</Text>
                </TouchableOpacity> 
        </View>
)}