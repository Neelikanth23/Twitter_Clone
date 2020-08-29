import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDG18rlEimOL4V9nZOWLoDpr00oRQVwCM4",
  authDomain: "twitter-clone-2a4f6.firebaseapp.com",
  databaseURL: "https://twitter-clone-2a4f6.firebaseio.com",
  projectId: "twitter-clone-2a4f6",
  storageBucket: "twitter-clone-2a4f6.appspot.com",
  messagingSenderId: "1040610218117",
  appId: "1:1040610218117:web:07c97bd68425b5a8ed19ec",
  measurementId: "G-RT12EGREBC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
