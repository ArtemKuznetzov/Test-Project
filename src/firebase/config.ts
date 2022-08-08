import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCaJCHaLURjepSRNMAXj6EL160I4477nmU",
  authDomain: "contacts-list-5a4e0.firebaseapp.com",
  databaseURL:
    "https://contacts-list-5a4e0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "contacts-list-5a4e0",
  storageBucket: "contacts-list-5a4e0.appspot.com",
  messagingSenderId: "537573385901",
  appId: "1:537573385901:web:e5e29900b35021284c8824",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

firebase.initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  databaseURL:
    "https://contacts-list-5a4e0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: firebaseConfig.projectId,
  storageBucket: firebaseConfig.storageBucket,
  messagingSenderId: firebaseConfig.messagingSenderId,
  appId: firebaseConfig.appId,
});

export default firebase;
