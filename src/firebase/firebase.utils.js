import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB5u31nVd3-5QN25TGJYFZvhukjUSjP4c4",
  authDomain: "ecom-11-16-20.firebaseapp.com",
  databaseURL: "https://ecom-11-16-20.firebaseio.com",
  projectId: "ecom-11-16-20",
  storageBucket: "ecom-11-16-20.appspot.com",
  messagingSenderId: "390568102468",
  appId: "1:390568102468:web:f7f6972ce5395301318a11",
  measurementId: "G-5WGSRBZ7QH",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
