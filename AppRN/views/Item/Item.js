import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import estiloItem from './estiloItem';
import {MaterialIcons} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AlunoFB } from '../../firebase/AlunoFB';

function Item({ navigation, route }) {

    const [item, setItem] = useState({});
    const {operacao, setOperacao} = route.params;

    const alunoFb = new AlunoFB();

    useEffect(() => {
            setItem(route.params.item);
    }, [route.params.item]);

    const voltar = () => {
        navigation.navigate('Colecao')
    }
    
    const salvar = (item) => {
        operacao == 'adicionar' ? alunoFb.adicionarAluno(item) : alunoFb.editarAluno(item);
        voltar();
     }

    const remover = (item) => { 
        alunoFb.removerAluno(item);
        voltar();
    }
    
    return (
        <View style={estiloItem.container}>
            <View style={estiloItem.header}>

                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white"/>
                </TouchableOpacity>
                <Text style={estiloItem.texto}>Alunos</Text>
                <Text></Text>
            </View>

            <View style={estiloItem.formularioContainer}>

                <View style={estiloItem.campoContainer}>
                    <FontAwesome5 name="book" size={26} color="#192f6a"/>
                    <TextInput
                        style={estiloItem.campo}
                        placeholder="Nome"
                        placeholderTextColor="#FFFFFF"
                        onChangeText={titulo => setItem({...item, Nome})}
                        value={item.Nome}
                    />
                </View>

               

                <View style={estiloItem.botoesContainer}>

                    <TouchableOpacity onPress={() => salvar(item)} style={estiloItem.botaoContainer}>
                        <LinearGradient colors={['#4c669f', '#192f6a', '#081a31']} style={estiloItem.botao}>
                            <MaterialIcons name="save" size={28} color="white" />
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => remover(item)} style={estiloItem.botaoContainer}>
                        <LinearGradient colors={['#4c669f', '#192f6a', '#081a31']} style={estiloItem.botao}>
                            <MaterialIcons name="delete" size={28} color="white" />
                        </LinearGradient>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default Item;
