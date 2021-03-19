import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import estiloLista from './estiloLista.js';
import {LinearGradient} from 'expo-linear-gradient';

 
const Lista = ({data}) => { 
    const [item, setItem] = useState(data);
    
    return (
        <View style ={estiloLista.areaItens}>

            <LinearGradient colors ={[ '#eb9f49' ,'#bd633c' , '#59190c']}>
            <Text style ={estiloLista.itemNome} >{item.nome}</Text> 
            <Text style={estiloLista.itemSub} > {item.regiao} </Text>

       
            <Image 
            source={item.foto} 
            style={estiloLista.itemFoto} 
            resizeMode='contain'
            />
        </LinearGradient>
        </View>
    );
}
export default Lista;