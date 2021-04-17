import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Firebase configuration
/*
var firebaseConfig = {
    apiKey: "AIzaSyB0otSNejlZvyCfajffFSOa89RsHo3lnPo",
    authDomain: "listen-it-60283.firebaseapp.com",
    projectId: "listen-it-60283",
    storageBucket: "listen-it-60283.appspot.com",
    messagingSenderId: "696546457979",
    appId: "1:696546457979:web:fc45abbe922fc89a0065de"
};
*/
var firebaseConfig = {
    apiKey: "AIzaSyAfL7oWJI8pZVbgu9NCHIt_jqiRT1sVzqI",
    authDomain: "listen-it-025.firebaseapp.com",
    projectId: "listen-it-025",
    storageBucket: "listen-it-025.appspot.com",
    messagingSenderId: "602982151215",
    appId: "1:602982151215:web:231fe571bd544a6b5142da"
  };
// Initialize Firebase
if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
export const auth = firebase.auth();
export const projectStorage =  firebase.storage();
export const projectFirestore = firebase.firestore();
