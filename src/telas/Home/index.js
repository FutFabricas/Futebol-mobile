import { View, Text, SafeAreaView,StatusBar} from "react-native";
import estilos from '../Home/estilos';
import { useFonts,Inter_400Regular,Inter_900Black  } from "@expo-google-fonts/inter";



export default function Home(){
    
    return (
    <SafeAreaView>
        <StatusBar/>
            <View style = {estilos.home}>
                 <View style = {estilos.home}> 
                     <Text style = {estilos.titulo}>BEM-VINDO, JOGADOR!</Text>
                </View>
            </View>
    </SafeAreaView>
)}