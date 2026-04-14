import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhNyL4SuiSmbUsHY22aQI7G5Q8qzx_sIE",
  authDomain: "campus-connect-f69e7.firebaseapp.com",
  projectId: "campus-connect-f69e7",
  storageBucket: "campus-connect-f69e7.firebasestorage.app",
  messagingSenderId: "97294577183",
  appId: "1:97294577183:web:8c3677eabe72d081402f2a",
  measurementId: "G-JDVWZC3LF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and Export Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;