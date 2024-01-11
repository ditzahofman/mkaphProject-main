 // Import the functions you need from the SDKs you need
// const initializeApp =require('firebase/app');
// const getAuth =require('firebase/auth');
// const getFirestore =require('firebase/firestore');
const admin = require('firebase-admin');
const firebase=require("firebase");
const {serviceAccount, firebaseConfig}=require('/config')

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp(firebaseConfig)
// const firebaseConfig = {
//     apiKey: "AIzaSyAYmnVVxd2T3Wgo5E-vYrOQJt8upuYY8U0",
//     authDomain: "mkaphproject.firebaseapp.com",
//     projectId: "mkaphproject",
//     storageBucket: "mkaphproject.appspot.com",
//     messagingSenderId: "548787186554",
//     appId: "1:548787186554:web:187b754a4351240941c4c3",
//     measurementId: "G-29PQ6LKBJM"
// };


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const adminDB=admin.firestore()
const db = firebase.firestore()

console.log("Connected to Firestore:", db);

// module.exports = app; // Export the app as the default export
// module.exports.firebase = app; // Export the app as `firebase` for named imports

module.exports = {
    adminDB,
    db
  };