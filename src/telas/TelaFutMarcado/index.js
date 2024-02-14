import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { estilosConfirmados } from './estilos';
import { Image, ScrollView} from 'react-native';

export default function TelaFutMarcado({route}) {
  const { params } = route;
  const local = params?.local || 'O FUT AINDA NÃO FOI MARCADO';
  const horario = params?.horario || 'O FUT AINDA NÃO FOI MARCADO';
  console.log('==============Params recebidos:', params);

   const navigation = useNavigation();
   const botaoAdicionarNome = () => {
    navigation.navigate('Confirmados')
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

      <View style={estilosConfirmados.fundoInfo}>
        
          <View style={estilosConfirmados.icones}>
            <Image source={require('../../../assets/img_local.png')}/>
            <Text style={estilosConfirmados.textoInformativo}>Local:</Text>
          </View>
            <Text style={estilosConfirmados.textoInformativo2}>---{local}---</Text>
            
            
           <View style={estilosConfirmados.icones}>
            <Image source={require('../../../assets/img_relogio.png')}/>
            <Text style={estilosConfirmados.textoInformativo}>Dia e Horário:</Text>
          </View>
            <Text style={estilosConfirmados.textoInformativo2}>---{horario}---</Text>
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
            <Text style={estilosConfirmados.textoBotaoAdicionar}>Me coloque na lista!</Text>

          </TouchableOpacity>

      </View>
      
      </View>
    </ScrollView>
  );
}
