// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB534HEl09uoaPUgBpSIkTujN4xDaIY76s",
  authDomain: "food-odering-app-6f8fd.firebaseapp.com",
  projectId: "food-odering-app-6f8fd",
  storageBucket: "food-odering-app-6f8fd.appspot.com",
  messagingSenderId: "620322636064",
  appId: "1:620322636064:web:d9b62fbf0106b1529a1745",
  measurementId: "G-HEDTB2RN9F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
