import React, { useState } from 'react';

import { View, Text} from 'react-native';

import Botao from '../../../componentes/Botão';

import CampoInteiro from '../../../componentes/CampoInteiro'; //ESSE É O INPUT (no caso só de numero)

import estilos from './estilos';

export default function Item({login,preco,descricao, quantidade: quantidadeInicial}){
const [quantidade,setQuantidade] = useState(quantidadeInicial); //Isso significa que vou criar em estado chamado 'quantidade'
const [total, setTotal] = useState(preco * quantidadeInicial);          // e para eu alterar essa quantidade 
                                                // eu posso usar o método ‘setQuantidade’ e inicialmente essa quantidade é 1.


const atualizaQuantidadeTotal = (novaQuantidade) => {
    setQuantidade(novaQuantidade);
    calculaTotal(novaQuantidade);
}
const calculaTotal = (novaQuantidade) => {
    setTotal(novaQuantidade * preco);
}



    return <>
    <View style={estilos.informacao}>
        <Text style={estilos.login}>{ login }</Text>
        <Text style={estilos.descricao}>{ descricao }</Text>
        <Text style={estilos.preco}>{
            Intl.NumberFormat('pt-BR', {
                style: 'currency', currency: 'BRL'
            }).format(preco)
        }</Text>
    </View>
    
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
                    <Botao valor='Remover do Carrinho' acao={() => {}}/>
                </View>
    
    <View style={estilos.divisor}/>
    </>
}