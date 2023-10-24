
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAmIBNj6PC51Mn-DwlyknwKHxoYYq2xRt4",
  authDomain: "react-notes-app-3c520.firebaseapp.com",
  projectId: "react-notes-app-3c520",
  storageBucket: "react-notes-app-3c520.appspot.com",
  messagingSenderId: "145971262299",
  appId: "1:145971262299:web:a42f7a642f096bff1aa07e"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
export const notesCollection = collection(database, "notes")