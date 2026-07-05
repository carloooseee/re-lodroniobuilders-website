// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzzURtHsOeWH8iM4Zgi5vZUKzcpXEji4k",
  authDomain: "re-lodroniobuilders.firebaseapp.com",
  projectId: "re-lodroniobuilders",
  storageBucket: "re-lodroniobuilders.firebasestorage.app",
  messagingSenderId: "607098506969",
  appId: "1:607098506969:web:674a4651a26b04e8dc78c8",
  measurementId: "G-9MRZD03S7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
