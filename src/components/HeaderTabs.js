import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function HeaderTabs({navigation}) {
 

    const [activeTab,setActiveTab]=useState('Restaurants')
  return (
    <View style={{flexDirection:"row",alignSelf:'center'}}>
      <HeaderButton text='Restaurants' btnColor='black' textColor='white' activeTab={activeTab} setActiveTab={setActiveTab} navigation={navigation} />
      <HeaderButton text='Offers' btnColor='white' textColor='black' activeTab={activeTab} setActiveTab={setActiveTab} navigation={navigation}/>
    </View>
  );
}
const HeaderButton=({activeTab,text,navigation,setActiveTab})=> 

    <TouchableOpacity style={{backgroundColor:activeTab==text ?'black':'white',
    paddingVertical:6,
    paddingHorizontal:16, 
    margin:30,
    borderRadius:30,
    width:150,
    textAlign:'center'
  }}
    onPress={()=>{setActiveTab(text)
      navigation.navigate('Offers')
    }}>
        <Text style={{color:activeTab==text?'white':'black',
    fontSize:15, 
     }}>{text}</Text>
        </TouchableOpacity>