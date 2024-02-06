import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Rotas from './src/Rotas.js'; //nao precisa colocar o /index
import TelaPadrao from './src/componentes/TelaPadrao/index.js';

export default function App() {
  return <TelaPadrao><Rotas /></TelaPadrao>;
}
