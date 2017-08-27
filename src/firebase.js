import firebase from 'firebase';

// have to ship our client side code because that's the nature of the web
const config = {
  apiKey: 'AIzaSyDzprP9bo8DjanqnXYUHqeGmSfGof37IDg',
  authDomain: 'first-flight-dfd9d.firebaseapp.com',
  databaseURL: 'https://first-flight-dfd9d.firebaseio.com',
  projectId: 'first-flight-dfd9d',
  storageBucket: 'first-flight-dfd9d.appspot.com',
  messagingSenderId: '56530993352'
};

firebase.initializeApp(config);

export default firebase;
export const database = firebase.database();
