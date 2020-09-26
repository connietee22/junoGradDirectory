import firebase from 'firebase/app';
// importing the database
import 'firebase/database';

// grad directory app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4lf_4rgciba2OfkcI2Bzz6aW4SykgYpA",
    authDomain: "juno-grad-directory.firebaseapp.com",
    databaseURL: "https://juno-grad-directory.firebaseio.com",
    projectId: "juno-grad-directory",
    storageBucket: "juno-grad-directory.appspot.com",
    messagingSenderId: "153843151209",
    appId: "1:153843151209:web:885a162587856509cc0df8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

