import React from 'react';
import { View, StyleSheet,TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper';
import { signOut } from "firebase/auth";
import {auth} from '../Firebase.js'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function DrawerContent(props) {
    const navigation = useNavigation();
    const handleSignOut =()=>{
      signOut(auth).then(() => {
        navigation.navigate('LoginScreen')
       
      }).catch((error) => {
        // An error happened.
      })}
    return (
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: 'https://png.pngtree.com/png-clipart/20221207/ourmid/pngtree-rock-girl-avatar-png-image_6514639.png',
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>Tanaya Sharma</Title>
                <Caption style={styles.caption}>@Tanaya</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="settings-helper" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate('Settings');
              }}
            />
         
    
          </Drawer.Section>
          <View  style={{
         width:100,
         padding:10}}>
          <TouchableOpacity
         onPress={handleSignOut}
         style={{backgroundColor:'#fa8072',
         borderRadius:10,
         width:100,
         padding:10}}><Text>Sign Out</Text></TouchableOpacity>
          </View>
          
        </View>
      </DrawerContentScrollView>
    );
  }
  const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    drawerSection: {
      marginTop: 15,
    },
  });