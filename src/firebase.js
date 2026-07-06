// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBzzURtHsOeWH8iM4Zgi5vZUKzcpXEji4k",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "re-lodroniobuilders.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "re-lodroniobuilders",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "re-lodroniobuilders.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "607098506969",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:607098506969:web:674a4651a26b04e8dc78c8",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-9MRZD03S7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, db, storage };
