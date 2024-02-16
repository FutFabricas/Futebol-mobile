import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image,ScrollView} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { estilosConfirmados } from './estilos';
import { getFutMarcadoByid } from '../../service/horario';
import { ID_HORARIO } from '../../help/const';

export default function TelaFutMarcado({route}) {
  const { params } = route;
  
  const localParam = params?.local;
  const horarioParam = params?.horario;

  
  const [local,setLocal] =useState(localParam);
  const [horario,setHorario] =useState(horarioParam);


  const get = useCallback(async () => {
    try {
      console.log("================",ID_HORARIO)
      const response = await getFutMarcadoByid(ID_HORARIO);
      console.log("============oq ta vindo?",response)
      setHorario(response.horario);
      setLocal(response.local)

     
    } catch (error) {
      console.log(error);
    } 
  }, []);

  useEffect(() => {
    get();
  }, [get]);

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
            <Text style = {estilosConfirmados.textoCaixaOBS}>Texto do capitão</Text>
          </View>

          <TouchableOpacity style={estilosConfirmados.botaoAdicionar} onPress={botaoAdicionarNome}>
            <Text style={estilosConfirmados.textoBotaoAdicionar}>Me coloque na lista!</Text>

          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  );
}
