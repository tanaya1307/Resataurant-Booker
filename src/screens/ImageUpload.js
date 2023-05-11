import React,{useState} from 'react'
import * as ImagePicker from 'expo-image-picker';
import {app,storage} from '../Firebase'
import { View ,StyleSheet,TouchableOpacity,Text,Image} from 'react-native'
import{ref, uploadBytes,getDownloadURL } from 'firebase/storage'

function ImageUpload() {
    const [image, setImage] = useState(null)
const [uploading, setUploading] = useState(false)
const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,   
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.uri);
    }
  };
  const uploadImage = async () => {
    console.log(app.name);
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', image, true);
      xhr.send(null);
    })
   
    const randomNum = Math.floor(Math.random() * 1000);
    const imageName = `Image_${randomNum}_${'image'}`;
    const storageRef= ref(storage, `Pictures/${imageName}`);
   
    try {
      const snapshot = await uploadBytes(storageRef, blob);
      console.log('Uploaded a blob or file!');
      setUploading(true);
      const url = await getDownloadURL(snapshot.ref);
      console.log("Download URL: ", url);
      setImage(url);
      return url;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  

  return (
    <View style={styles.container}>
      {image && <Image source={{uri: image}} style={{width: 170 , height: 200}}/>}
      <TouchableOpacity  onPress={pickImage} style={styles.button} ><Text style={{color:'white'}}>Select Image</Text></TouchableOpacity>
      {!uploading ? <TouchableOpacity onPress={uploadImage} style={styles.button}><Text  style={{color:'white'}}>Upload</Text></TouchableOpacity>: <ActivityIndicator size={'small'} color='black' style={styles.button} />}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    margin: '40%',
    backgroundColor:'none',
    border:'none'
    
  },
  button:{
    marginTop:20,
    backgroundColor:'black',
    alignItems:'center',
    padding:13,
    borderRadius:40,
    width:300,
    position:'relative',
    color:'white'
    
  }
  
});

export default ImageUpload