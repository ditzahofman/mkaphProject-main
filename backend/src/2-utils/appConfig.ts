
class AppConfig {
  public host = 'localhost';
  public user = 'root';
  public port = 3001;

  // Add isDevelopment property
  public isDevelopment: boolean = process.env.NODE_ENV === 'development';

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

const appConfig = new AppConfig();
export default appConfig;
