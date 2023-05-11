import { View, Text } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/RestaurantDetails/About'
import Reviews from '../components/RestaurantDetails/reviews'
import AddPhoto from '../components/addPhoto'



export default function RestaurantDetailScreen({route,navigation}) {
  return (
    <View>
      <About route={route}/>
      {/* <Divider width={1.8} style={{marginVertical:20}} /> */}
      <ImageUpload/>
      <Reviews/>
      
      
    </View>
  )
}



const ImageUpload=()=>(
  <>
  <View style={{marginTop:'-10%',marginLeft:'5%'}}>
  <AddPhoto/>
  </View>

  </>
)