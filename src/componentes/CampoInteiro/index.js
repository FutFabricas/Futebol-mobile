import React from 'react';

import { TextInput } from 'react-native';

import estilosPadrao from './estilos';

export default function CampoInteiro({valor, acao, estilos}) {

    const atualiza=(novoValor,acaoRetorno) => {
        const verificaInteiro = novoValor.match(/^[0-9]*$/); //sim, essa sintaxe é muito doida
            if (!verificaInteiro) return;                     //mas ta verificando se o input nao ta num grupo de 0 a 9

            const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2') //quando começar com 0 e tiver alguma outra coisa depois, a gente sobreescreve só com a segunda coisa

            acaoRetorno(removeZeroEsquerda);
        }                                             


   const numeroEmTexto = String(valor) //o text input só aceita texto, entao vamo criar uma const pra converter

    return <TextInput
    style={[estilosPadrao.campo, estilos]}
    keyboardType='number-pad'
    selectTextOnFocus
    onChangeText={(novoValor) => {atualiza(novoValor, acao)}}
    value={valor}
    />
}