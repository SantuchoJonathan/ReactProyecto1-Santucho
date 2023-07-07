// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLOSOTMBr4acKbxHRPmPOg66ji-bJmvLo",
  authDomain: "proyectoreact-pastorino.firebaseapp.com",
  projectId: "proyectoreact-pastorino",
  storageBucket: "proyectoreact-pastorino.appspot.com",
  messagingSenderId: "364200820987",
  appId: "1:364200820987:web:3492b080bc1aec3d9db05e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
