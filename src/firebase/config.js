import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBcFC_h_L24LsgsUstmwfzEaBhv5fHMlvQ",
    authDomain: "webaccountmanager-cf8ef.firebaseapp.com",
    projectId: "webaccountmanager-cf8ef",
    storageBucket: "webaccountmanager-cf8ef.appspot.com",
    messagingSenderId: "850972593622",
    appId: "1:850972593622:web:99b8e83bfaef3db4a32877"
};

// init firebase

firebase.initializeApp(firebaseConfig);

// init individual services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export{projectFirestore, projectAuth};
