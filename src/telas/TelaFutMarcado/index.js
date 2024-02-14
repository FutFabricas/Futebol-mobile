import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilosConfirmados } from './estilos';
import { Image, ScrollView} from 'react-native';

import { useRoute } from '@react-navigation/native';


export default function TelaFutMarcado() {
   const route = useRoute();
    // const { local, horario } = route.params;
   const navigation = useNavigation();

   const botaoAdicionarNome = () => {
    alert("Você vai pra tela de adicionar seu nome")
   }

  return (
  <ScrollView>
    <View style={estilosConfirmados.container}>
      
      <View style={estilosConfirmados.container}>
        <TouchableOpacity style={estilosConfirmados.botaoVoltar} onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/img_voltarTelaFutMarcado.png')}/>
        </TouchableOpacity>
      </View>

      <View style={estilosConfirmados.container}>
        <Text style={estilosConfirmados.titulo}>FUT DA SEMANA</Text>
      </View>

                                                                   {/* <View>
                                                                    <Text style={{color: 'white'}}>Local: {local}</Text>
                                                                   <Text style={{color: 'white'}}>Horario: {horario}</Text>
                                                                   </View> */}

      <View style={estilosConfirmados.fundoInfo}>
        
          <View style={estilosConfirmados.icones}>
            <Image source={require('../../../assets/img_local.png')}/>
            <Text style={estilosConfirmados.textoInformativo}>Local:</Text>
          </View>
            <Text style={estilosConfirmados.textoInformativo2}>Quadraaaa Brasil</Text>
            
           <View style={estilosConfirmados.icones}>
            <Image source={require('../../../assets/img_relogio.png')}/>
            <Text style={estilosConfirmados.textoInformativo}>Dia e Horário:</Text>
          </View>
            <Text style={estilosConfirmados.textoInformativo2}> 17/02/2024 - 9hrs</Text>
          <View style={estilosConfirmados.icones}>
            <Image source={require('../../../assets/img_dinheiro.png')}/>
            <Text style={estilosConfirmados.textoInformativo}>R$ 20,00 - Por Pessoa</Text>
          </View>
            <Text style={estilosConfirmados.textoInformativo}></Text>

          <View style={estilosConfirmados.icones}>
            <Image source={require('../../../assets/img_jogadores.png')}/>
            <Text style={estilosConfirmados.textoInformativo}>Limite de 20 Jogadores!</Text>
          </View>
            <Text style={estilosConfirmados.textoObs}> Observações: </Text>
          <View style={estilosConfirmados.fundoObs}>
            <Text style = {estilosConfirmados.textoCaixaOBS}>Texto aleatóriodaklwd </Text>
          </View>

          <TouchableOpacity style={estilosConfirmados.botaoAdicionar} onPress={botaoAdicionarNome}>
            <Text style={estilosConfirmados.textoBotaoAdicionar}>Participar</Text>

          </TouchableOpacity>

      </View>
      
      </View>
    </ScrollView>
  );
}
