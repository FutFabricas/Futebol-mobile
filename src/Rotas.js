import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaLogin from "././telas/TelaLogin";
import Carrinho from "././telas/Carrinho";
import Servicos from "././telas/Servicos";
import TelaCadastro from "./telas/TelaCadastro";

import { cores } from './estilos'

const Tab = createBottomTabNavigator();

export default function Rotas() {
    return <NavigationContainer>
        <Tab.Navigator
        tabBarOptions={{ 
            activeTintColor: cores.claro,
            inactiveTintColor: 'green',
            activeBackgroundColor: 'green',
            inactiveBackgroundColor: '#6FAF46',
            style: {
                height: 10,
            },
            labelStyle: {
                width: '100%',
                flex: 8,
                fontWeight: 'bold',
                fontSize: 16,
                lineHeight: 15,
                marginTop: 4,
                paddingTop: 11,
                backgroundColor: '#6FAF46'
            },
            keyboardHidesTabBar: true
        }}>
            <Tab.Screen name="Capitão" component={TelaLogin} options={{ headerShown: false}}/>
            <Tab.Screen name="Cadastro" component={TelaCadastro} options={{ headerShown: false}}/>
            <Tab.Screen name="Confirmados" component={Carrinho} options={{ headerShown: false }}/>
            <Tab.Screen name="Data/Hora" component={Servicos} options={{ headerShown: false }}/>
            
        </Tab.Navigator>
    </NavigationContainer>
}