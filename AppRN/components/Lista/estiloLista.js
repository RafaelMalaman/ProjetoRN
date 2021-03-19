import {StyleSheet} from 'react-native';
const estiloLista = StyleSheet.create({
    areaitens: {
        flex:1,
    },
    itemNome:{
        height: 40,
        fontsize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 15,
    },
    itemSub: {
        fontSize: 16,
        textAlign: 'center',
    },
    itemFoto: {
        height: 300,
        marginTop: 20,
        marginBottom: 20
    },
});

export default estiloLista;