
import { initializeApp } from "firebase/app";
import  { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBpIu0OZNiwUHnyEi73s_hC05yeulLphLI",
  authDomain: "prueba-tecnica01.firebaseapp.com",
  projectId: "prueba-tecnica01",
  storageBucket: "prueba-tecnica01.appspot.com",
  messagingSenderId: "33417398691",
  appId: "1:33417398691:web:e0f6a772cf7a36ef78b216"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth};