import React, {useState} from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import estiloColecao from './estiloColecao';
import Lista from '../../components/Lista/Lista'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

function Colecao({ navigation }) {

    const [colecao, setColecao] = useState ([
        {
            id:'1',
            nome:'Saci-Pererê',
            regiao:'O saci-pererê é um ser mítico que prega peças nas pessoas.',
            foto: require ('../../assets/lendas/1.jpg'),
        },
        {
            id:'2',
            nome:'Mula Sem-Cabeça',
            regiao:'Nas narrativas lendárias, a mula é marrom ou preta e muito assustadora. ',
            foto: require ('../../assets/lendas/2.jpg'),
        },
        {
            id:'3',
            nome:'Curupira',
            regiao:'A lenda diz que o curupira tem cabelos vermelhos e seus pés são ao contrário.',
            foto: require ('../../assets/lendas/3.jpg'),
        },
        {
            id:'4',
            nome:'Caipora',
            regiao:'A Caipora é uma jovem índia de cabelos vermelhos, orelhas pontudas e dentes verdes.',
            foto: require ('../../assets/lendas/4.jpg'),
        }

    ])

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style ={estiloColecao.container}>

            <View style={estiloColecao.header}>

            <TouchableOpacity onPress= {voltar}>
                <AntDesign name="leftcircleo" size={24} color="white" />
           </TouchableOpacity>
           <Text style= {estiloColecao.texto}> Lendas</Text>
           <FontAwesome5 name="plus" size={24} color="white" />
            </View>


            <FlatList
            
                showsHorizontalScrollIndicator = {false}
                keyExtractor={(item) => item.id}
                data = {colecao}
                renderItem={ ({item}) => <Lista data = {item} />}

            />

        </View>
        
    )
}

export default Colecao;
