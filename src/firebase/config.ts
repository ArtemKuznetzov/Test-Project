import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: process.env.CONTACTS_LIST_FIREBASE_API_KEY,
  authDomain: process.env.CONTACTS_LIST_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.CONTACTS_LIST_FIREBASE_PROJECT_ID,
  storageBucket: process.env.CONTACTS_LIST_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.CONTACTS_LIST_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.CONTACTS_LIST_FIREBASE_APP_ID,
});

export default firebase;
