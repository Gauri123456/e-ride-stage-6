import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

const firebaseConfig = {
    apiKey: "AIzaSyAK2F-P1ar6qrBh4CNt0taAjUugmcuubHY",
    authDomain: "e--ride-stage-4.firebaseapp.com",
    projectId: "e--ride-stage-4",
    storageBucket: "e--ride-stage-4.appspot.com",
    messagingSenderId: "505288199982",
    appId: "1:505288199982:web:d7b5c9fe0f953dc7b5f4bf"
  };

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
