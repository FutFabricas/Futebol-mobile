import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffffff',
        flexDirection: 'row',
    },

    home: {
        marginTop : 0,
        backgroundColor: '#000000'
    },

    imagem_home:{
        flex: 1,
        resizeMode: 'cover'
    },

    botao_home:{
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 15,
        marginVertical:10

    }

})