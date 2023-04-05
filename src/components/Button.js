import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

export default function HeaderButton(props) {
  return (
    <TouchableOpacity style={{backgroundColor:props.activeTab==props.text ?'black':'white',
    paddingVertical:6,
    paddingHorizontal:16,
    borderRadius:30}}
    onPress={()=>props.setActiveTab(props.text)}>
        <Text style={{color:props.activeTab==props.text?'white':'black',
    fontSize:15 
    }}>{props.text}</Text>
        </TouchableOpacity>
  )
}