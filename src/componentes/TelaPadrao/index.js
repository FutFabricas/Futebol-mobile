import React from "react";

import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from "react-native";
import estilosGlobal, { cores } from '../../estilos';
import estilos from "./estilos";


export default function TelaPadrao({ children }) {
    return <><SafeAreaView style={estilosGlobal.preencher}>
        <StatusBar backgroundColor={'#6FAF46'} />
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={estilosGlobal.preencher}
        >
            {children}
        </KeyboardAvoidingView>
    </SafeAreaView>
        <SafeAreaView style={estilos.ajusteTelaBaixo} />
    </>
}