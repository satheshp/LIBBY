


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSX6ZaMcTm6jw33tkIApjm6Vf_iEcdg6U",
  authDomain: "covid23-547da.firebaseapp.com",
  projectId: "covid23-547da",
  storageBucket: "covid23-547da.appspot.com",
  messagingSenderId: "611568571117",
  appId: "1:611568571117:web:9895401eb7a2e45f3f32e4",
  measurementId: "G-N5Q75KLC33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);