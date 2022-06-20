/* import firebase from "firebase"; */
import "firebase/firestore";
import "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

/* import { getAnalytics } from "firebase/analytics";
 */ // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1fiaR3YpzPvWOETNNMGmiuPdcxhknFKQ",
  authDomain: "la-tierra-invisible.firebaseapp.com",
  projectId: "la-tierra-invisible",
  storageBucket: "la-tierra-invisible.appspot.com",
  messagingSenderId: "1061323166326",
  appId: "1:1061323166326:web:36e390d245e752dead0557",
  measurementId: "G-G3CTNX3568",
};

// Initialize Firebase
/* const firebaseAnalytics = getAnalytics(firebaseApp);
 */
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
