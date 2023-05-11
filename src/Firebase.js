import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/app'
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCyRySTTsdv1sTyoe5195a2u5zS65K17wg",
  authDomain: "uber-eats-clone-373817.firebaseapp.com",
  projectId: "uber-eats-clone-373817",
  storageBucket: "uber-eats-clone-373817.appspot.com",
  messagingSenderId: "481043880464",
  appId: "1:481043880464:web:e35e3c92bb7c9860878895"
};

// Initialize Firebase
const app =initializeApp(firebaseConfig);
// const storage = firebase.storage().ref('gs://uber-eats-clone-373817.appspot.com');
const auth = getAuth(app);
const storage = getStorage(app);
export {auth,app,firebase,storage}
