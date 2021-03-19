import { StyleSheet } from 'react-native';

const estiloInicial = StyleSheet.create({
    
    titulo: {
        width: '100%',
        height: '40%',
        backgroundColor: '#115c11',
        alignItems: "center",
        
        justifyContent: 'center',
        
    },
   container: {   
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',     
   },
   fundo: {
       flexDirection: "row",
       justifyContent: 'space-evenly',
       alignItems: 'center',
       width: '100%',
       height: '100%'
   },
   borda: {   
      backgroundColor: '#081a31',  
      width: '80%',
      height: 230,
      borderRadius: 10,
   },
   texto2: {
       
      fontSize: 50,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textAlign: "center",
      paddingTop: 80

   },
   texto: {
      fontSize: 30,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textAlign: "center",
      padding: 10
   },
   botaoContainer: {
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 40,
      marginRight: 40,
      borderRadius: 5,
      height: 40,   
      justifyContent: 'center',
      alignItems: 'center',
   },
   botaoTexto: {
    
      fontSize: 18,
      color: '#FFFFFF',
      fontWeight: 'bold',
      marginBottom: 100
   },
   botaoBG:{ 
        width: 140,
        height: 140,
        overflow: 'hidden',
        justifyContent: 'flex-end',
        alignItems: 'center',
        
 },
 
});

  export default estiloInicial;