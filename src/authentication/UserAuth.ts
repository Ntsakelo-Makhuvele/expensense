import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useState } from "react";


export type User = {
    email: string,
    password: string,
}

const firebaseConfig = {
  apiKey: "AIzaSyC0Yr1vPHZhFGsqPY7DYW0KIHyWuXwY_tQ",
  authDomain: "clean-outcome-464319-u4.firebaseapp.com",
  projectId: "clean-outcome-464319-u4",
  storageBucket: "clean-outcome-464319-u4.firebasestorage.app",
  messagingSenderId: "235183806136",
  appId: "1:235183806136:web:900885d5a8a3485edbc64d",
  measurementId: "G-2MP3E46CP7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
