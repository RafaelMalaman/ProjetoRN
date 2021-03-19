import { StyleSheet } from 'react-native';

const estiloColecao = StyleSheet.create({

    container: {
        flex: 1,
    },
    header:{
        height: 40,
        backgroundColor: '#115c11',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
    },
    texto: {
        fontSize: 18,
        color: '#FFFFFF',
    },
});

  export default estiloColecao;