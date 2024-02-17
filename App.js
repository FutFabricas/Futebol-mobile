import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { View } from 'react-native'
import Servicos from './src/telas/Servicos'; //nao precisa colocar o /index
import Home from './src/telas/Home';
import Rotas from './src/Rotas';
import { useFonts, Inter_400Regular, Inter_900Black, Inter_700Bold } from '@expo-google-fonts/inter';

export default function App() {
  const [fontesProjeto] = useFonts({
    'InterRegular': Inter_400Regular,
    'InterTitulos': Inter_900Black,
    'InterBold700': Inter_700Bold,
  });

  if (!fontesProjeto) {
    return <View/>
  }
  return <Rotas/>;
}
