// Importa las funciones necesarias de los SDKs que necesitas
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase para tu app web
const firebaseConfig = {
        apiKey: "AIzaSyBiTeX77uJMs8KEK4HmFFRK7SPKoHKR-Yc",
        authDomain: "appagro-dfaf8.firebaseapp.com",
        projectId: "appagro-dfaf8",
        storageBucket: "appagro-dfaf8.firebasestorage.app",
        messagingSenderId: "895919542328",
        appId: "1:895919542328:web:d5dc070ab1f82fcdad56cd"
      };

// Inicializa Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
