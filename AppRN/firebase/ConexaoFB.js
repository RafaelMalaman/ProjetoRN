import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCN4Vb-z-mKD-V_5DS6XS9pYDM7vpyVUSw",
    authDomain: "projetorn-fb-128af.firebaseapp.com",
    databaseURL: "https://projetorn-fb-128af.firebaseapp.com",
    projectId: "projetorn-fb-128af",
    storageBucket: "projetorn-fb-128af.appspot.com",
    messagingSenderId: "432693694334",
    appId: "1:432693694334:web:d95c62e43463c137bb6d2f",
    measurementId: "G-BF4K2PJXVQ"
  };

  var app = firebase.initializeApp(firebaseConfig);

  export const ConexaoFS = app.firestore();
