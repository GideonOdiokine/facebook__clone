import firebase from "firebase/app";
import "firebase/firestore";
// import "firebase/storage";
import "firebase/auth";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAqTS0-8mWT46Ir3GpAdAbE8jOIPZ4V0RQ",
  authDomain: "fb-app-ca382.firebaseapp.com",
  projectId: "fb-app-ca382",
  storageBucket: "fb-app-ca382.appspot.com",
  messagingSenderId: "287519269083",
  appId: "1:287519269083:web:7c1b7ba3baea29e016ecfe",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;
