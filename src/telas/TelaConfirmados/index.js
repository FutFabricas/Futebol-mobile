import { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, TouchableWithoutFeedback, Image, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilosConfirmados } from './estilos';
import Modaldoidao from '../../componentes/Modal';
import List from '../../componentes/List';
import { getJogadores } from '../../service/jogadores';

export default function TelaConfirmados() {
  const [data, setData] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [size, setSize] = useState(0);
  const navigation = useNavigation();

  const delJogador = (id) => {
    newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const get = useCallback(async () => {
    try {
      const response = await getJogadores();

      setData(response);

      setSize(response.length);
    } catch (error) {
      console.log(error);
    } finally {
      setCarregando(f);
    }
  }, []);

  useEffect(() => {
    get();
  }, [get]);

  const registerJogador = (jogador) => {
    console.log("==========",jogador);
    setData((ant)=>[...ant,jogador]); //o set data pega oq ele tem dentro e adiciona o jogador, garantindo o dado dentro do data
    setModal(!modal);
  }
  
  const [modal,setModal]=useState(false);

  return (

    <View style={estilosConfirmados.container}>
      <View style={estilosConfirmados.icone}>
        <TouchableOpacity style={estilosConfirmados.botaoVoltar} onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/img_voltarTelaFutMarcado.png')}/>
        </TouchableOpacity>
      </View>

      <Text style={estilosConfirmados.titulo}>Lista de Confirmados: {data.length}</Text>
      <List data={data} delItem={delJogador}/>
      
      

      <TouchableOpacity style={estilosConfirmados.botaoAdicionar} onPress={(jogador)=>registerJogador(jogador)}>
        <Text style={estilosConfirmados.textoBotaoAdicionar}>+</Text>
      </TouchableOpacity>
      <Text style={estilosConfirmados.querojogar}>Adicionar Jogador</Text>
      
           <Modaldoidao
            modalVisible={modal}
            onPress={()=>setModal(!modal)}
            transparent={true}
             />
    </View>

  );
}
