import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDSZfgfNCBm9I6mg44Tf6IDJXJQ1D_1E1Y",
    authDomain: "vegaplay-b9831.firebaseapp.com",
    projectId: "vegaplay-b9831",
    storageBucket: "vegaplay-b9831.firebasestorage.app",
    messagingSenderId: "252305083266",
    appId: "1:252305083266:web:248c6137a372d103585d9b",
    measurementId: "G-J27GTETQP7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
