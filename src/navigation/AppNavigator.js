

import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../screens/auth/RegisterScreen'
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailScreen from '../screens/RestaurantDetailScreen'
import DrawerContent from '../components/Drawer'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ImageUpload from '../screens/ImageUpload';
import OfferScreen from '../screens/OfferScreen';



const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} /> } >
        <Drawer.Screen name="Home" component={HomeStack}  />
      </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  return (
   
    <Stack.Navigator initialRouteName="LoginScreen" screenOptions={screenOptions}>
      
      <Stack.Screen name="LoginScreen" component={LoginScreen}  />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="App" component={DrawerNavigator} />
      <Stack.Screen name="OfferScreen" component={OfferScreen} />
      <Stack.Screen name="RestaurantDetailScreen" component={RestaurantDetailScreen} />
       <Stack.Screen name="ImageUpload" component={ImageUpload} />

    </Stack.Navigator>

   
  );
}


