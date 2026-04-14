// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrz7dyGUxTt2yD4ee2ZhWe3NILlZaCRPM",
  authDomain: "campus-connect-f69e7.firebaseapp.com",
  projectId: "campus-connect-f69e7",
  storageBucket: "campus-connect-f69e7.firebasestorage.app",
  messagingSenderId: "97294577183",
  appId: "1:97294577183:web:8c3677eabe72d081402f2a",
  measurementId: "G-JDVWZC3LF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
