import { View, Text } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/RestaurantDetails/About'




export default function RestaurantDetailScreen({route,navigation}) {
  return (
    <View>
      <About route={route}/>
      <Divider width={1.8} style={{marginVertical:20}} />
      
    </View>
  )
}
