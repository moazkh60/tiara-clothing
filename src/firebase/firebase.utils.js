import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBNJqLdSNLpb5xenVikB3UkbzbEffG6ws4",
    authDomain: "tiara-db.firebaseapp.com",
    databaseURL: "https://tiara-db.firebaseio.com",
    projectId: "tiara-db",
    storageBucket: "tiara-db.appspot.com",
    messagingSenderId: "111570065407",
    appId: "1:111570065407:web:af9f4ed85912b35d7939ca",
    measurementId: "G-TH7E4HS9X8"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;