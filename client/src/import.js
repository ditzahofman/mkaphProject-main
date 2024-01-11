import firestoreService from 'firestore-export-import';
import firebaseConfig from './firebase.js';
import serviceAccount from './serviceAccount.json';

// JSON To Firestore
const jsonToFirestore = async () => {
  try {
    console.log('Initialzing Firebase');
    await firestoreService.initializeApp(serviceAccount, firebaseConfig.databaseURL);
    console.log('Firebase Initialized');

    await firestoreService.restore('./data/investment-company.json');
    console.log('Upload Success');
  }
  catch (error) {
    console.log(error);
  }
};

jsonToFirestore();