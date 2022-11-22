// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJYuawRE7y676u-kmy79HIij19zUCRgjQ",
  authDomain: "wigan-coders-16165.firebaseapp.com",
  projectId: "wigan-coders-16165",
  storageBucket: "wigan-coders-16165.appspot.com",
  messagingSenderId: "755941444318",
  appId: "1:755941444318:web:1e39212f4031de9bc8504f",
  measurementId: "G-LVC7S4JJ7C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


