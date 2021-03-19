import React, {useState, useEffect} from 'react';
import { StatusBar, Text, View, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import estiloPerfil from './estiloPerfil';
import { AntDesign } from '@expo/vector-icons';
import ItemLista from '../../components/ItemLista/ItemLista';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { AlunoFB } from '../../firebase/AlunoFB';
function Perfil({ navigation }) {

    
    
     const [colecao, setColecao] = useState( [] );

    const alunoFb = new AlunoFB();

    useEffect(() => {
        alunoFb.pegarColecao()
        .orderBy('Nome')
        .onSnapshot((query) => {
            const items = [];
            query.forEach((doc) => {
                items.push({...doc.data(), id: doc.id});
            });
            setColecao(items);
        });
    },[]);

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    const adicionar = () => {
        navigation.navigate('Item', {item: {}, operacao: 'adicionar'})
    }
    
    const editar = (item) => {
        navigation.navigate('Item', {item: item, operacao: 'editar'})
    }
    
    return (
        <View style ={estiloPerfil.container}>

            <View style={estiloPerfil.header}>

            <TouchableOpacity onPress= {voltar}>
                <AntDesign name="leftcircleo" size={24} color="white" />
           </TouchableOpacity>
           <Text style= {estiloPerfil.texto}>Perfis</Text>

            <TouchableOpacity onPress={adicionar}>
                    <MaterialIcons name="add" size={24} color="white" />
                </TouchableOpacity>
            </View>

           
            <FlatList 
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.Nome}
                data={colecao}
                renderItem={ ({item}) => <ItemLista data={item} detalhe={() => editar(item)} />}
            />
            </View>
            
            
        
    )
};

export default Perfil;
