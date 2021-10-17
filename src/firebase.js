import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnt7qmyJDBhr_xcp0N6Y35uqyO2v1TJQg",
  authDomain: "clone-8cfa0.firebaseapp.com",
  projectId: "clone-8cfa0",
  storageBucket: "clone-8cfa0.appspot.com",
  messagingSenderId: "751932175199",
  appId: "1:751932175199:web:605d69a40e7cad90187cea",
  measurementId: "G-TZEN3XMSYK",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };
