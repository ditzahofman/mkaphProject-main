
import * as admin from 'firebase-admin';
import appConfig from "./appConfig";

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: appConfig.firebaseConfig.databaseURL,
});

const db = admin.firestore();

export { db };

