import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyB0otSNejlZvyCfajffFSOa89RsHo3lnPo",
authDomain: "listen-it-60283.firebaseapp.com",
projectId: "listen-it-60283",
storageBucket: "listen-it-60283.appspot.com",
messagingSenderId: "696546457979",
appId: "1:696546457979:web:fc45abbe922fc89a0065de"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage =  firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };