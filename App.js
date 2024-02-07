import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
//Importei as Fontes do projeto Direto do Projeto
import {useFonts, Inter_900Black, Inter_400Regular} from '@expo-google-fonts/inter';
import Servicos from './src/telas/Servicos'; //nao precisa colocar o /index
import Home from './src/telas/Home';

export default function App() {
  const [FonteProjeto]= useFonts({
    'InterPadrao': Inter_400Regular,
    'InterTitulo': Inter_900Black,
});
if (!FonteProjeto) {
  return <View/>}

  return <Home/>;
}
