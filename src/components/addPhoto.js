import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';


export default function AddPhoto() {
  const navigation=useNavigation();
  
  return (
    <View
    style={{
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        position:'absolute',
        top:240,
        zIndex:999


    }}
    >
    <View 
     style={{
        flexDirection:'row',
        justifyContent:'center',
        width:'100%'
     }}
    
    >
        <TouchableOpacity
         style={{
            marginTop:20,
            backgroundColor:'black',
            alignItems:'center',
            padding:13,
            borderRadius:40,
            width:300,
            position:'relative'
         }}
          onPress={()=>( navigation.navigate('ImageUpload'))} 
        
        >
        <Text style={{color:'white'}} >Upload Photos</Text>
        </TouchableOpacity>
     
    </View>
    </View>
  )
}