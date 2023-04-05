import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View ,ImageBackground,Image} from 'react-native'
import React,{useState} from 'react'
import {auth} from '../../Firebase.js'
import {createUserWithEmailAndPassword} from "firebase/auth";
import dinnericon from '../../../assets/icons/dinner.png'
import { useNavigation } from '@react-navigation/native';
import styles from './Styles.js'

const image = { uri: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60" };

const RegisterScreen = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [result,setResult]=useState('')
  const navigation = useNavigation();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setResult(user);
      navigation.navigate('HomeScreen')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setResult(errorMessage)
    })
  }

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        enabled
      >
        <Image source={dinnericon} style={styles.icon}/> 
        <View>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text=>setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text=>setPassword(text)}
            secureTextEntry
            style={styles.input}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSignUp}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[styles.button,styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText} >Go Back</Text>
          </TouchableOpacity>
        </View>
        {/* <View><Text>{result}</Text></View> */}
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

export default RegisterScreen
