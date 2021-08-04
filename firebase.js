import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import {API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, MEASUREMENT_ID} from "react-native-dotenv"

console.log(API_KEY)

const fire = firebase.initializeApp({
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
});
        
const firestore = fire.firestore();

export const auth = fire.auth();
export const db = {
  shopminders: firestore.collection('shopminders')
}

export default {
  fire,
};

// const fire = firebase.initializeApp({
//     apiKey: "AIzaSyCypcN_3IetULS6V8-BQ9FzjLazZAIDuSQ",
//     authDomain: "mywebsite-7ab79.firebaseapp.com",
//     projectId: "mywebsite-7ab79",
//     storageBucket: "mywebsite-7ab79.appspot.com",
//     messagingSenderId: "17995190475",
//     appId: "1:17995190475:web:ec92d56e81c0792f69cb4e"
//   });

// {
//   apiKey: "AIzaSyAWen05WnvJYUsxP8PcHEJTN4KqHbrC6JE",
//   authDomain: "gc-class.firebaseapp.com",
//   projectId: "gc-class",
//   storageBucket: "gc-class.appspot.com",
//   messagingSenderId: "430423762038",
//   appId: "1:430423762038:web:1075b9caf06c1d9879eb57",
//   measurementId: "G-CD9FCPK5V4"
// }