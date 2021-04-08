import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB0otSNejlZvyCfajffFSOa89RsHo3lnPo",
    authDomain: "listen-it-60283.firebaseapp.com",
    projectId: "listen-it-60283",
    storageBucket: "listen-it-60283.appspot.com",
    messagingSenderId: "696546457979",
    appId: "1:696546457979:web:fc45abbe922fc89a0065de"
};

// Initialize Firebase
if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
export const auth = firebase.auth();
export const projectStorage =  firebase.storage();
export const projectFirestore = firebase.firestore();
