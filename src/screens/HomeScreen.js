import React from 'react'
import { useNavigation } from '@react-navigation/native';
import HeaderTabs from '../components/HeaderTabs.js';
import Categories from '../components/Restaurant/Categories.js';
import RestaurantList from '../components/Restaurant/Restaurant.js';
import { ScrollView } from 'react-native-gesture-handler';

function HomeScreen() {
  const navigation = useNavigation();
  const handleSignOut =()=>{
    signOut(auth).then(() => {
      navigation.goBack()
     
    }).catch((error) => {
      // An error happened.
    })}
  return (
    <>
     <HeaderTabs style={{margin:10}} navigation={navigation}/>
     <Categories/>
     <ScrollView>
     <RestaurantList/>
     </ScrollView>
    
   
    </>
  )
}

export default HomeScreen