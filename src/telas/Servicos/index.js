import React from 'react';        //precisamos importar pq a gente precisa dizer ao react que a gente vai usar tag no javascript

import {StatusBar, SafeAreaView, FlatList, KeyboardAvoidingView, Platform } from 'react-native'; //o 'Text' é pra usar a tag e o 'SafeAreaView' é pra nada ficar na barra super do Ios e 'StatusBar' resolve no Android
import Item from './Item';
import estilosGlobal from '../../estilos';

const servicos = [
    {
        id: 1,
        login: "João Carlo",
        preco: 15,
        descricao: "Atacante"
    },
    {
        id: 2,
        login: "Luis",
        preco: 15,
        descricao: "Goleiro"
    },
    {
        id:3,
        login: "Igor",
        preco: 15,
        descricao: "Meio-Campo"
    },
    {
        id:4,
        login: "Larissa",
        preco: 15,
        descricao: "Cheerleader"
    },
    {
        id:5,
        login: "Thiago",
        preco: 15,
        descricao: "Zagueiro"
    },
    {
        id: 6,
        login: "Mauricio",
        preco: 15,
        descricao: "Lateral"
    },
    {
        id: 7,
        login: "Ederson",
        preco: 15,
        descricao: "Goleiro"
    }
    
];

export default function Servicos(){ //esse export default só pode ser utilizado uma vez por arquivo
    return <SafeAreaView style={estilosGlobal.preencher}>
        <StatusBar />
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={estilosGlobal.preencher}
        >
            <FlatList
            data={servicos}
            renderItem={({item}) => <Item {... item} />}
            keyExtractor={({id}) => String(id)}
        /> 
        </KeyboardAvoidingView>
    </SafeAreaView>
}       