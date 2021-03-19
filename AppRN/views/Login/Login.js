import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import estiloLogin from './estiloLogin';

function Login({ navigation }) {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = () => {
       

            navigation.replace('Inicial');
        }
    
    
    return (
        <View style={estiloLogin.container}>
            <View style={estiloLogin.borda}>

                <Text style={estiloLogin.texto}>Olá, este é o 'Ouvi Dizer'. Um aplicativo sobre ao folclore brasileiro!</Text>


                <TouchableOpacity style={estiloLogin.botaoContainer} onPress={entrar}>
                    <Text style={estiloLogin.botaoTexto}>Entrar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Login;
