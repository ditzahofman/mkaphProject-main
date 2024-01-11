const dotenv = require("dotenv");
const assert = require("assert");
 
dotenv.config();
 
const {
  PORT,
  HOST,
  HOST_URL,
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID
} = process.env;
 
// adding init assertions
assert(PORT, "Application port is required");
assert(HOST_URL, "Service endpoint is required");
assert(DATABASE_URL, "Firebase database endpoint is required");
assert(PROJECT_ID, "Firebase project id is required");
assert(APP_ID, "Firebase app id is required");
 
module.exports = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  firebaseConfig: {
    apiKey: "AIzaSyAYmnVVxd2T3Wgo5E-vYrOQJt8upuYY8U0",
    authDomain: "mkaphproject.firebaseapp.com",
    projectId: "mkaphproject",
    DATABASE_URL: "https://mkaphProject.firebaseio.com",
    storageBucket: "mkaphproject.appspot.com",
    messagingSenderId: "548787186554",
    appId: "1:548787186554:web:187b754a4351240941c4c3",
    measurementId: "G-29PQ6LKBJM"
  }
}