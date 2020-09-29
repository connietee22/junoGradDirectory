import firebase from 'firebase/app';
// importing the database
import 'firebase/database';
import 'firebase/storage';

// grad directory app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyC4lf_4rgciba2OfkcI2Bzz6aW4SykgYpA',
	authDomain: 'juno-grad-directory.firebaseapp.com',
	databaseURL: 'https://juno-grad-directory.firebaseio.com',
	projectId: 'juno-grad-directory',
	storageBucket: 'juno-grad-directory.appspot.com',
	messagingSenderId: '153843151209',
	appId: '1:153843151209:web:885a162587856509cc0df8',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// BLOB is binary data that represents file once uploaded to web from the input type=file, push to firebase /// READ THE BLOB FROM THE FILE LIST

// 1. open up a portal to storage, and then pushing into
// Get a reference to the storage service, which is used to create references in your storage bucket
// these two variables can be used where I want to use
const storage = firebase.storage();
// Create a storage reference from Firebase's storage service
const storageRef = storage.ref();

export { storage, firebase as default };
