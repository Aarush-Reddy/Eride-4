import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBuMvQ9wlryQAHrgiFdsCKdfNhEDxGRBV8",
    authDomain: "studentattendanceapp-8f354.firebaseapp.com",
    projectId: "studentattendanceapp-8f354",
    storageBucket: "studentattendanceapp-8f354.appspot.com",
    messagingSenderId: "309214904208",
    appId: "1:309214904208:web:6e7f1f5701e90453013d15",
    measurementId: "G-N1HNKCWLV8"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
