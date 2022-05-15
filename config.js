import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAuNuXbROpBnx4pfhJmZK2MMHwiRAAdyZQ",
    authDomain: "e-ride-57a32.firebaseapp.com",
    projectId: "e-ride-57a32",
    storageBucket: "e-ride-57a32.appspot.com",
    messagingSenderId: "662195039374",
    appId: "1:662195039374:web:ee644c6f332459a1496ddf"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
