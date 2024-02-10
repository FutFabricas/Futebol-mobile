import React from 'react';        //precisamos importar pq a gente precisa dizer ao react que a gente vai usar tag no javascript

import { FlatList } from 'react-native'; //o 'Text' é pra usar a tag e o 'SafeAreaView' é pra nada ficar na barra super do Ios e 'StatusBar' resolve no Android
import Item from './Item';
import TelaPadrao from '../../componentes/TelaPadrao';
import StatusCarrinho from '../../componentes/StatusCarrinho';

const servicos = [
    {
        id: 1,
        login: "João Carlo",
        preco: 15,
        descricao: "Atacante",
        quantidade: 1
    },
    {
        id: 2,
        login: "Luis",
        preco: 15,
        descricao: "Goleiro",
        quantidade: 1
    },
    {
        id:3,
        login: "Igor",
        preco: 15,
        descricao: "Meio-Campo",
        quantidade: 2
    },
    {
        id:4,
        login: "Larissa",
        preco: 15,
        descricao: "Cheerleader",
        quantidade: 2
    },
    {
        id:5,
        login: "Thiago",
        preco: 15,
        descricao: "Zagueiro",
        quantidade: 1
    },
    {
        id: 6,
        login: "Mauricio",
        preco: 15,
        descricao: "Lateral",
        quantidade: 1
    },
    {
        id: 7,
        login: "Ederson",
        preco: 15,
        descricao: "Goleiro",
        quantidade: 1
    }
    
];

export default function Carrinho({ navigation }){ //esse export default só pode ser utilizado uma vez por arquivo
    const total = servicos.reduce((soma,{preco, quantidade}) => soma + (preco * quantidade), 0); //aqui eu to percorrendo cada item e retornando sempre a 'soma'(que é o valor anterior) e somando pela multiplicação do 'preço' * 'quantidade' 

    return <>
        <StatusCarrinho total  = {total}/>
            <FlatList
            data={servicos}
            renderItem={({item}) => <Item {... item} />}
            keyExtractor={({id}) => String(id)}
        /> 
        
    </>
}       