import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaLogin from "././telas/TelaLogin";
import Carrinho from "././telas/Carrinho";
import Servicos from "././telas/Servicos";
import TelaCadastro from "./telas/TelaCadastro";

const Tab = createBottomTabNavigator();

function Rotas() {
    return <NavigationContainer>
        
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
            <Tab.Screen name="Login" component={TelaLogin} options={{ headerShown: false}}/>
            <Tab.Screen name="Cadastro" component={TelaCadastro} options={{ headerShown: false}}/>
            <Tab.Screen name="Carrinho" component={Carrinho} options={{ headerShown: false }}/>
            <Tab.Screen name="Servicos" component={Servicos} options={{ headerShown: false }}/>

            
            
            
        </Tab.Navigator>
    </NavigationContainer>
    
    
}
export default Rotas;