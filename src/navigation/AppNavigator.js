

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../screens/auth/RegisterScreen'
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailScreen from '../screens/RestaurantDetailScreen'

const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  const screenOptions={
    headerShown:false,
  }
  return (
    <>
    <NavigationContainer independent='true' >
    <Stack.Navigator initialRouteName='Login' screenOptions={screenOptions}>
    <Stack.Screen name="LoginScreen" component={LoginScreen}  />
    <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
    <Stack.Screen name="HomeScreen" component={HomeScreen}/>
    <Stack.Screen name="RestaurantDetailScreen" component={RestaurantDetailScreen}/>
    
   

    </Stack.Navigator>
  </NavigationContainer>
  
  </>
  )
}