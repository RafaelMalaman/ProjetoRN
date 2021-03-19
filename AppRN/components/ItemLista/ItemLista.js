import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import estiloItemLista from './estiloItemLista.js';


const ItemLista = ({data, detalhe}) => {

    const [item, setItem] = useState(data);

    return (
        <TouchableOpacity style={estiloItemLista.areaItens} onPress={detalhe}>

            <LinearGradient colors={['#14417b', '#92afd7', '#92afd7']}>
                <Text style={estiloItemLista.itemTitulo}> {item.Nome} </Text>
            </LinearGradient>
            <Text style={estiloItemLista.itemSubTitulo}> {item.Sala}</Text>
            
                <LinearGradient colors={['#92afd7', '#92afd7', '#14417b']}>
                        <Text> </Text>
                
            </LinearGradient>

            </TouchableOpacity>
    );
        }

export default ItemLista;
