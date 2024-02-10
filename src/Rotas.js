import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, ce } from '@react-navigation/native-stack';

import Tabs from "././telas/Tabs";
import Login from "./telas/TelaLogin";
import Home from "./telas/Home"

const StackNavigation = createNativeStackNavigator();

function Rotas() {
    return <NavigationContainer >
        <StackNavigation.Navigator>
            <StackNavigation.Screen
                name="Home"
                component={Home} 
                options={{ headerShown: false }}
                />
            <StackNavigation.Screen
                name="Tabs"
                component={Tabs}
                options={{ headerShown: false }} />
            <StackNavigation.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false,  }} />
        </StackNavigation.Navigator>
    </NavigationContainer>


}
export default Rotas;