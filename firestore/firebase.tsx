// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1Eza9Px5P1jLTQ2CG8m440cjrze1hdv0",
  authDomain: "shogo-ichinose-sandbox.firebaseapp.com",
  databaseURL: "https://shogo-ichinose-sandbox.firebaseio.com",
  projectId: "shogo-ichinose-sandbox",
  storageBucket: "shogo-ichinose-sandbox.appspot.com",
  messagingSenderId: "894166322353",
  appId: "1:894166322353:web:dc2060b604d984fedbe690",
  measurementId: "G-QY12HQ4MGG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const storage = getStorage();

export default app;