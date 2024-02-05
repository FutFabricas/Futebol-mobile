import React, { useState } from 'react';

import {TouchableOpacity, View, Text} from 'react-native';

import Botao from '../../../componentes/Botão';

import CampoInteiro from '../../../componentes/CampoInteiro'; //ESSE É O INPUT (no caso só de numero)

import estilos from './estilos';

export default function Item({login,preco,descricao}){
const [quantidade,setQuantidade] = useState(1); //Isso significa que vou criar em estado chamado 'quantidade'
const [total, setTotal] = useState(preco);          // e para eu alterar essa quantidade 
                                                // eu posso usar o método ‘setQuantidade’ e inicialmente essa quantidade é 1.
const [expandir, setExpandir] = useState(false);

const atualizaQuantidadeTotal = (novaQuantidade) => {
    setQuantidade(novaQuantidade);
    calculaTotal(novaQuantidade);
}
const calculaTotal = (novaQuantidade) => {
    setTotal(novaQuantidade * preco);
}

const inverteExpandir = () => {
    setExpandir(!expandir);
    atualizaQuantidadeTotal(0);
}

    return <>
    <TouchableOpacity style={estilos.informacao} onPress={inverteExpandir}>
        <Text style={estilos.login}>{ login }</Text>
        <Text style={estilos.descricao}>{ descricao }</Text>
        <Text style={estilos.preco}>{
            Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
            }).format(preco)
        }</Text>
    </TouchableOpacity>
    {expandir && //isso é um if, se for verdadeiro ele vai mostrar a view abaixo
    <View style={estilos.carrinho}>
        <View>
            <View style={estilos.valor}>
                <Text style={estilos.descricao}>Quantidade: </Text>
                <CampoInteiro estilos={estilos.quantidade} valor={quantidade} acao={atualizaQuantidadeTotal}/>
            </View>
            
            <View style={estilos.valor}>
                <Text style={estilos.descricao}>Total: </Text>
                <Text style={estilos.preco}>{
                Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
            }).format(total)
            }</Text>
            </View>
                </View>
                    <Botao valor='MARCAR FUT!' acao={() => {}}/>
                </View>
    }
    <View style={estilos.divisor}/>
    </>
}