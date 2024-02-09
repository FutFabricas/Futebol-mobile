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
        paddingVertical: 8,
        paddingHorizontal: 28,
        
        
    },

    texto_botao_home_topo:{
        color: '#FFFFFF',
        fontFamily: 'InterTitulos',
    },

    home_topo:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#242323',
        
    },  

    home_topo_titulo: {
        backgroundColor: '#242323',
        textAlign: 'center',
        fontFamily: 'InterTitulos',
        
       
    },

    titulo: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'InterTitulos',
        textAlign: 'center',
        marginVertical: 40

    }, 

    botao_home: {
        color: '#6FAF46',
        width: 347,
        height: 65,
        borderRadius: 10,
        backgroundColor: '#6FAF46',
        fontFamily: 'InterRegular',
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    texto_botao: {
        color: '#FFFFFF',
        fontFamily: 'InterTitulos',
        fontSize: 20,
        


    }
});