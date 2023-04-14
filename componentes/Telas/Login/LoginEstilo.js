import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
        borderTopLeftRadius:50,
        borderTopRightRadius:50
      },
      cabecalho: {
        alignItems: 'center',
        marginBottom:40,
        right:130
        
      },
      titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#D6001B',
      },
      form: {
        paddingHorizontal: 20,
        top:20,
      },
      input: {
        height: 50,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#F4F8FB',
        fontSize: 15,
      },
      botaoContainer: {
        alignItems: 'center',
        marginTop: 1,
        bottom:50,
        height: 50,
    
      },
      subtitle:{
        fontSize: 12,
      },
      container2:{
        backgroundColor:'#D6001B',
        width:'100%',
        height:'100%'  
        
     },
     camada1:{
       backgroundColor:'white',
       width:'100%',
       height: "95%",
       position:'absolute',
       bottom:0,
       marginBottom:0,
       borderTopRightRadius:50,
       borderTopLeftRadius:50
     },
     esqueceu:{
        marginTop: 0,
        color: "black",
        textAlign: "right",
        marginBottom: - 70,
     },
})
        