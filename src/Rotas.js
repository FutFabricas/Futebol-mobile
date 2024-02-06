import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaLogin from "././telas/TelaLogin";
import Carrinho from "././telas/Carrinho";
import Servicos from "././telas/Servicos";

import { cores } from './estilos'

const Tab = createBottomTabNavigator();

export default function Rotas() {
    return <NavigationContainer>
        <Tab.Navigator
        tabBarOptions={{
            activeTintColor: cores.claro,
            inactiveTintColor: 'green',
            activeBackgroundColor: '#6FAF46',
            inactiveBackgroundColor: '#6FAF46',
            style: {
                height: 70,
            },
            labelStyle: {
                width: '100%',
                flex: 1,
                fontWeight: 'bold',
                fontSize: 18,
                lineHeight: 15,
                marginTop: 3,
                paddingTop: 2,
                backgroundColor: '#6FAF46'
            }
        }}>
            <Tab.Screen name="Login" component={TelaLogin} options={{ headerShown: false }}/>
            <Tab.Screen name="Carrinho" component={Carrinho} options={{ headerShown: false }}/>
            <Tab.Screen name="Serviços" component={Servicos} options={{ headerShown: false }}/>
        </Tab.Navigator>
    </NavigationContainer>
}