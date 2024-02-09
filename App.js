import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Rotas from './src/Rotas.js'; //nao precisa colocar o /index
import TelaPadrao from './src/componentes/TelaPadrao/index.js';



function App() {
  return <TelaPadrao><Rotas/></TelaPadrao>;
}
export default App;