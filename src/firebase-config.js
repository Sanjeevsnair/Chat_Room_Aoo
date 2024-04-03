// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8rP2wVJvCx3nbEt7G3PxxDiAI5ZsTIjQ",
  authDomain: "chatapp-d9d81.firebaseapp.com",
  projectId: "chatapp-d9d81",
  storageBucket: "chatapp-d9d81.appspot.com",
  messagingSenderId: "608771085624",
  appId: "1:608771085624:web:8c75272b58f48d9b619dcd",
  measurementId: "G-WQF1DCKP02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db=getFirestore(app)
// const analytics = getAnalytics(app);
