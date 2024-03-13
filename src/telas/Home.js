import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import logo from './../assets/logo.png'

export default function Topo() {
    return <View style={estilos.topo}>
        <Image source={logo}  style={estilos.imagem}/>
        <Text style={estilos.boasVindas}>Olá Patric</Text>
        <Text style={estilos.leganda}>Encontre os demais produtores</Text>
    </View>

}

const estilos = StyleSheet.create({
    topo:{
        backgroundColor:'#F5F5F5',
        padding:16,
    },
    imagem:{
        width:70,
        height:28,
    },
    boasVindas:{
        marginTop: 24,
        fontSize:26,
        lineHeight:42,
        fontWeight: 'bold',
        color:	'#000000',
    },
    leganda:{
        fontSize:16,
        lineHeight:26,
        color:	'#000000',
    }
});