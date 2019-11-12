import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyATRcP3qXqCRTm94XUaZz7rncSKpBXFK5M",
    authDomain: "crwn-db-9eb4f.firebaseapp.com",
    databaseURL: "https://crwn-db-9eb4f.firebaseio.com",
    projectId: "crwn-db-9eb4f",
    storageBucket: "crwn-db-9eb4f.appspot.com",
    messagingSenderId: "517916857884",
    appId: "1:517916857884:web:79cceba92e50f80ae1f1d9",
    measurementId: "G-4616R1VTH2"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;