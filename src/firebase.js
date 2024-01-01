 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYmnVVxd2T3Wgo5E-vYrOQJt8upuYY8U0",
    authDomain: "mkaphproject.firebaseapp.com",
    projectId: "mkaphproject",
    storageBucket: "mkaphproject.appspot.com",
    messagingSenderId: "548787186554",
    appId: "1:548787186554:web:187b754a4351240941c4c3",
    measurementId: "G-29PQ6LKBJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

console.log("Connected to Firestore:", db);

export { app as firebase };
export default app;

