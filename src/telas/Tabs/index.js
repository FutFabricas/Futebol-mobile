import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaCadastro from '../TelaCadastro';
import Servicos from '../Servicos';
import Carrinho from '../Carrinho';
import TelaConfirmados from '../TelaConfirmados';
import TelaFutMarcado from '../TelaFutMarcado';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: '#747474',
        activeBackgroundColor: '#6FAF46',
        inactiveBackgroundColor: '#242323',
        style: {
          height: 10,
        },
        labelStyle: {
          width: '100%',
          flex: 8,
          fontWeight: 'bold',
          fontSize: 16,
          lineHeight: 15,
          marginTop: 1,
          paddingTop: 11,
          backgroundColor: '#242323'
        },
        keyboardHidesTabBar: true //quando clicar nos inputs o teclado vai ficar por cima da TabBar
      }}>
  
      <Tab.Screen name="Cadastro" component={TelaCadastro} options={{ headerShown: false }} />
      {/* <Tab.Screen name="Carrinho" component={Carrinho} options={{ headerShown: false }} /> */}
      {/* <Tab.Screen name="Servicos" component={Servicos} options={{ headerShown: false }} /> */}
      <Tab.Screen name="Confirmados" component={TelaConfirmados} options={{ headerShown: false}}/>
      <Tab.Screen name ="Fut Marcado" component={TelaFutMarcado} options={{ headerShown: false}}/>

    </Tab.Navigator>
  )
}


export default Tabs