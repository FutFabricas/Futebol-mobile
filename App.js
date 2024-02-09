import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { View } from 'react-native';
//Importei as Fontes do projeto Direto do Projeto
import Servicos from './src/telas/Servicos'; //nao precisa colocar o /index
import Home from './src/telas/Home';
import { useFonts, Inter_400Regular, Inter_900Black } from '@expo-google-fonts/inter';

export default function App() {
  const [fontesProjeto] = useFonts({
    'InterRegular': Inter_400Regular,
    'InterTitulos': Inter_900Black,
  });

  if (!fontesProjeto) {
    return <View/>
  }
  return <Home/>;
}
export default App;