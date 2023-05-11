import React from 'react'
import Offer from '../components/Offer'
import { SafeAreaView, View, Text ,Image} from 'react-native';

function OfferScreen() {
  return (
    <>
    <SafeAreaView>
   <View><Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center' ,margin:'10%'}}>
  Check out exciting offers
  </Text>
    <Offer/>
    <View>
    <Image source={require('../../assets/images/sammy-shopping.png')}  style={{ width:250, height:250 ,marginLeft:'70%',marginTop:'-50%'}} />
    </View>
    </View> 
    </SafeAreaView>
   
   
      
    </>
  )
}


export default OfferScreen