import { StyleSheet } from 'react-native';

const estiloLogin = StyleSheet.create({
   container: {   
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',     
   },
   borda: {   
      backgroundColor: '#115c11',  
      width: '80%',
      height: 230,
      borderRadius: 10,
   },
   texto: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textAlign: "justify-left",
      padding: 10,
      paddingBottom:50
   },
   campo: {
      backgroundColor: '#dcedff',
      fontSize: 18,
      marginLeft: 40,
      marginRight: 40,    
      marginTop: 5,
      borderRadius: 5,
      height: 40,
      paddingLeft: 10
    },
   botaoContainer: {
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 40,
      marginRight: 40,
      borderRadius: 5,
      height: 40,
      borderWidth: 2,
      borderColor: '#FFFFFF',
      backgroundColor: '#59190c',
      justifyContent: 'center',
      alignItems: 'center',
   },
      botaoTexto: {
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: 'bold'
   },
});

  export default estiloLogin;