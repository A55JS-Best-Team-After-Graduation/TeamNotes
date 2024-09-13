// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdVqvDhZnEm3sacarg0kMhkH0jvX7KSi8",
  authDomain: "teamsnote-c60cc.firebaseapp.com",
  projectId: "teamsnote-c60cc",
  storageBucket: "teamsnote-c60cc.appspot.com",
  messagingSenderId: "869311271398",
  appId: "1:869311271398:web:219ce6fb29537b1ff00627",
  databaseURL:'https://teamsnote-c60cc-default-rtdb.europe-west1.firebasedatabase.app/'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getDatabase(app);