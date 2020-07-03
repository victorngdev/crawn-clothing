import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBqsZk2oxO_efQ5ELQvqxymmuldEjEF19k",
    authDomain: "crown-clothing-victor.firebaseapp.com",
    databaseURL: "https://crown-clothing-victor.firebaseio.com",
    projectId: "crown-clothing-victor",
    storageBucket: "crown-clothing-victor.appspot.com",
    messagingSenderId: "836276352367",
    appId: "1:836276352367:web:28ac8c79112a51076b249a",
    measurementId: "G-MMPXGE5X45"
}

firebase.initializeApp(config);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
