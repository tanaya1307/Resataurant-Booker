import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Button,Text ,TouchableOpacity} from 'react-native';
import { signOut } from "firebase/auth";
import {auth} from '../Firebase.js'
import HeaderTabs from '../components/HeaderTabs.js';
import Categories from '../components/Restaurant/Categories.js';
import RestaurantList from '../components/Restaurant/Restaurant.js';

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
     <RestaurantList/>
    <TouchableOpacity
         onPress={handleSignOut}
         style={{backgroundColor:'#fa8072',
         borderRadius:10,
         width:100,
         padding:10}}><Text>Sign Out</Text></TouchableOpacity>
    </>
  )
}

export default HomeScreen