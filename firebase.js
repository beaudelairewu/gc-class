import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const fire = firebase.initializeApp({
  apiKey: "AIzaSyAWen05WnvJYUsxP8PcHEJTN4KqHbrC6JE",
  authDomain: "gc-class.firebaseapp.com",
  projectId: "gc-class",
  storageBucket: "gc-class.appspot.com",
  messagingSenderId: "430423762038",
  appId: "1:430423762038:web:1075b9caf06c1d9879eb57",
});

export const auth = fire.auth();
export const db = fire.firestore();
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