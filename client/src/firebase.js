import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo2nC_4b9SnZTk7Br3eOQ0oFLaHRhqVzI",
  authDomain: "ecommerce-ute.firebaseapp.com",
  projectId: "ecommerce-ute",
  storageBucket: "ecommerce-ute.appspot.com",
  messagingSenderId: "223997340349",
  appId: "1:223997340349:web:c514593b156c099e0d25d4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
