import { initializeApp } from 'firebase/app'; // Import the Firebase app module
import { getAuth } from 'firebase/auth'; // Import the Firebase Auth module

const firebaseConfig = {
  apiKey: "AIzaSyCrxLyjJ_UgOx1p1zN6MZ8dj4fLz5Q4gC8",
  authDomain: "optverification-542b4.firebaseapp.com",
  projectId: "optverification-542b4",
  storageBucket: "optverification-542b4.appspot.com",
  messagingSenderId: "3548989922",
  appId: "1:3548989922:web:b9e652f832a6d1a20891bb",
  measurementId: "G-L4ZZW5LT6P"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp); // Get the Auth instance

export { firebaseApp, auth }; // Export the app and auth instances
