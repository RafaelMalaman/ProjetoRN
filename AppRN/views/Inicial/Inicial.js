import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloInicial from './estiloInicial';

function Inicial({ navigation }) {

    const abrirColecao = () => {
        navigation.navigate('Colecao')
    }
    
    const abrirPerfil = () => {
        navigation.navigate('Perfil')
    }
    
    return (
        <View style={estiloInicial.container}>
            <View style = {estiloInicial.titulo}>
            <Text style={estiloInicial.texto2}>Ouvi Dizer</Text>
            </View>
            <ImageBackground source={require('../../assets/imagens/bg.jpg')} style={estiloInicial.fundo}>
           

                
           
                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirColecao}>
                                <ImageBackground source={require('../../assets/imagens/br.png')} style={estiloInicial.botaoBG}> </ImageBackground>
                    <Text style={estiloInicial.botaoTexto}>Lendas</Text>
                                
                </TouchableOpacity>

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirPerfil}>
                                                    <ImageBackground source={require('../../assets/imagens/pf.png')} style={estiloInicial.botaoBG}>  </ImageBackground>
                    <Text style={estiloInicial.botaoTexto}>Perfis</Text>
                                                   
                </TouchableOpacity>

      </ImageBackground>
        </View>
    )
}

export default Inicial;
