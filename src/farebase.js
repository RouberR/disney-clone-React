import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBu9XXgM5vFML1nAvYfpyexZ6F2sw7kv3s",
    authDomain: "disney-clone-9abdb.firebaseapp.com",
    projectId: "disney-clone-9abdb",
    storageBucket: "disney-clone-9abdb.appspot.com",
    messagingSenderId: "477793059117",
    appId: "1:477793059117:web:78dfe2639f44bac21653a4",
    measurementId: "G-VLWYQ6970D"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

 export const auth = getAuth();
 export const provider = new GoogleAuthProvider();
 export default db;
  
