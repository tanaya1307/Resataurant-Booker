import { StyleSheet } from 'react-native';
 const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    
    },
    inputContainer:{
     width:'80%',
     paddingHorizontal:15,
     paddingVertical:10,
     borderRadius:10,
     marginTop:5
     ,
     width:10
    },
    input:{
      borderRadius:5,
      padding:10,
      margin:2,
      backgroundColor:'white',
      width:200
    
    
    },
    
    buttonContainer:{
      width:'60%',
      justifyContent:'center',
      alignItems:'center',
      marginTop:40,
      backgroundColor:' #ff6f3c'
      
    },
    button:{
      backgroundColor:'#fa8072',
      padding:10,
      margin:10,
      borderRadius:10,
      alignItems:'center'
     
    
    }
    ,
    buttonText:{
      fontWeight:'700',
      color:'black',
      fontSize:16
    
    },
    buttonOutline:{
     backgroundColor:'white',
     borderColor:'#fa8072',
     borderWidth:2
    
    
    },
    buttonOutlineText:{
      fontWeight:'700',
      color:'black',
      fontSize:16
    },
    image: {
      flex: 1,
      justifyContent: "center"
    }
    ,icon:{
        position:'absolute',
        bottom:20,
        width:80,
        height:80
     
    
    }
    
    
    })

    export default styles