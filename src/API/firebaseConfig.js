import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseService = firebase.initializeApp({
  apiKey: 'AIzaSyD9o_-qE_kiiT2xzhpsyZDrv8H-Rwa8y_Q',
  authDomain: 'npsoftware-41219.firebaseapp.com',
  databaseURL: 'https://npsoftware-41219.firebaseio.com',
  projectId: 'npsoftware-41219',
  storageBucket: 'npsoftware-41219.appspot.com',
  messagingSenderId: '1065642864434',
  appId: '1:1065642864434:web:80a531cc76503ec608712b',
  measurementId: 'G-6QNP53N9F3',
});

export default firebaseService;
