import { View, Text, SafeAreaView,StatusBar} from "react-native";
import estilos from '../Home/estilos';

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