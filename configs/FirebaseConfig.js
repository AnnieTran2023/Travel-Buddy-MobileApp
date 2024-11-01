// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJypihoLLwOZVe8gehMy3CkybZviuXlLk",
  authDomain: "travel-8fca3.firebaseapp.com",
  projectId: "travel-8fca3",
  storageBucket: "travel-8fca3.firebasestorage.app",
  messagingSenderId: "138927365724",
  appId: "1:138927365724:web:02d27e13742b2520185099",
  measurementId: "G-KX6EW60RK8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export default app;
export { auth };
