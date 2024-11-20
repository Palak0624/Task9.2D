import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyAWsSKaLW0zlqkvlYbQHO_vU6llAFJzD2E",
  authDomain: "dtask-c223c.firebaseapp.com",
  projectId: "dtask-c223c",
  storageBucket: "dtask-c223c.firebasestorage.app",
  messagingSenderId: "784514406324",
  appId: "1:784514406324:web:ab84bed3b1a545488184e1"
};




const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
const storage = getStorage(app);

export { app, storage };