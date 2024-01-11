import * as firebase from 'firebase/app';
import 'firebase/database';

// General config:
class AppConfig {
  public port = 3001;
  public host = "localhost";
  public isDevelopment = false;
  public helpPage = ''; //if you have
  public salesEmail = ''; // if you have
}

class DevelopmentConfig extends AppConfig {
  public isDevelopment = true;
  public isProduction = false;
  public frontEndUrl = 'Write the URL of the website';

  // Firebase config for development
  public firebaseConfig = {
    apiKey: 'AIzaSyAYmnVVxd2T3Wgo5E-vYrOQJt8upuYY8U0',
    authDomain: 'mkaphproject.firebaseapp.com',
    databaseURL: 'https://mkaphProject.firebaseio.com',
    projectId: 'mkaphproject',
    storageBucket: 'mkaphproject.appspot.com',
    messagingSenderId: '548787186554',
    appId: '1:548787186554:web:187b754a4351240941c4c3',
  };
}

class ProductionConfig extends AppConfig {
  public isDevelopment = false;
  public isProduction = true;
  public frontEndUrl = 'Write the URL of the website';

  // Firebase config for production
  public firebaseConfig = {
    apiKey: 'YOUR_API_KEY_PROD',
    authDomain: 'YOUR_AUTH_DOMAIN_PROD',
    databaseURL: 'YOUR_DATABASE_URL_PROD',
    projectId: 'YOUR_PROJECT_ID_PROD',
    storageBucket: 'YOUR_STORAGE_BUCKET_PROD',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID_PROD',
    appId: 'YOUR_APP_ID_PROD',
  };
}

const appConfig: AppConfig = process.env.NODE_ENV === 'production' ? new ProductionConfig() : new DevelopmentConfig();

// Initialize Firebase with the appropriate config
if ('firebaseConfig' in appConfig) {
  firebase.initializeApp(appConfig.firebaseConfig);
}

export default appConfig;
