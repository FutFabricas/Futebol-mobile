import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { View } from 'react-native';
import Rotas from './src/Rotas';
import { useFonts, Inter_400Regular, Inter_900Black } from '@expo-google-fonts/inter';

export default function App() {
  const [fontesProjeto] = useFonts({
    'InterRegular': Inter_400Regular,
    'InterTitulos': Inter_900Black,
  });

  if (!fontesProjeto) {
    return <View/>
  }
  return <Rotas/>;
}
