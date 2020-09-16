import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCEY8zdWGxIhVD0wZQ43Sxqd5kU3EaqC_M",
    authDomain: "clothing-db-f9080.firebaseapp.com",
    databaseURL: "https://clothing-db-f9080.firebaseio.com",
    projectId: "clothing-db-f9080",
    storageBucket: "clothing-db-f9080.appspot.com",
    messagingSenderId: "338881258604",
    appId: "1:338881258604:web:3aa065f7e7db1c046e2449",
    measurementId: "G-TXQN3CEX7L"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;