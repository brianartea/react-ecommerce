import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyB5u31nVd3-5QN25TGJYFZvhukjUSjP4c4",
  authDomain: "ecom-11-16-20.firebaseapp.com",
  databaseURL: "https://ecom-11-16-20.firebaseio.com",
  projectId: "ecom-11-16-20",
  storageBucket: "ecom-11-16-20.appspot.com",
  messagingSenderId: "390568102468",
  appId: "1:390568102468:web:f7f6972ce5395301318a11",
  measurementId: "G-5WGSRBZ7QH",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
//export const firebase = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
