import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaLogin from "././telas/TelaLogin";
import Carrinho from "././telas/Carrinho";
import Servicos from "././telas/Servicos";

const Tab = createBottomTabNavigator();

export default function Rotas() {
    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Login" component={TelaLogin} options={{ headerShown: false }}/>
            <Tab.Screen name="Carrinho" component={Carrinho} options={{ headerShown: false }}/>
            <Tab.Screen name="Serviços" component={Servicos} options={{ headerShown: false }}/>
        </Tab.Navigator>
    </NavigationContainer>
}