import { initializeApp } from "firebase/app";
// config del profe
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCf3ooyV7zAbfXvXHf796lDFnHF456gmZY",
  authDomain: "ecommerce-prueba-jmga.firebaseapp.com",
  projectId: "ecommerce-prueba-jmga",
  storageBucket: "ecommerce-prueba-jmga.appspot.com",
  messagingSenderId: "1088257803780",
  appId: "1:1088257803780:web:453e975b59cb7ff7af5751"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// config del profe
export const db = getFirestore(app)