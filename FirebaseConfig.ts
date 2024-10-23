// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from 'firebase/firestore'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ9HoVnhQRVNAlkkZ5ommZUAJZnqkRfm8",
  authDomain: "my-app2-c564c.firebaseapp.com",
  projectId: "my-app2-c564c",
  storageBucket: "my-app2-c564c.appspot.com",
  messagingSenderId: "583952438948",
  appId: "1:583952438948:web:11f4657e02a70485d7b831"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);