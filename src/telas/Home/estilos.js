import { StyleSheet } from "react-native";


export const styles = StyleSheet.create  ({

    container: {
        flex: 1,
        backgroundColor: '#242323',
        justifyContent: 'center',
        alignItems: 'center'

    },

    icons_home:{
        justifyContent: 'center',
        alignItems: 'center'


    },

    botao_home_topo:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 25,
        
        
    },

    texto_botao_home_topo:{
        color: '#FFFFFF',
        fontFamily: 'InterTitulos'
    },

    home_topo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#242323'
    },  

    home_topo_titulo: {
        backgroundColor: '#242323',
        textAlign: 'center',
        fontFamily: 'InterTitulos'
       
    },

    titulo: {
        color: '#6FAF46',
        fontFamily: 'InterTitulos',
        fontSize: 32,
        height:80,
        textAlign: 'center',
        marginVertical: 40

    }, 

    tituloApp: {
        
        color: '#FFFFFF',
        fontSize: 32,
        fontFamily: 'InterTitulos',
    },


    botao_home: {
        color: '#6FAF46',
        width: 355,
        height: 70,
        borderRadius: 20,
        backgroundColor: '#6FAF46',
        background: 'linear-gradient(to right, #92C357, #6FAF46)',
        fontFamily: 'InterRegular',
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 1
    },

    texto_botao: {
        color: '#FFFFFF',
        fontFamily: 'InterTitulos',
        fontSize: 32,
    },
    
    
});