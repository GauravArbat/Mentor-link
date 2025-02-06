// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLA1Dl-HiuY5XRv3kJLOCYXEfL8eCLJHg",
  authDomain: "mentor-link-3a45a.firebaseapp.com",
  projectId: "mentor-link-3a45a",
  storageBucket: "mentor-link-3a45a.appspot.com", // Fixed storageBucket typo
  messagingSenderId: "738644163646",
  appId: "1:738644163646:web:c0ddbc1fa8b0966d49e56f",
  measurementId: "G-24T55SNFP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Added authentication
const analytics = getAnalytics(app);

export { auth }; // Exporting auth for use in Login.js & Signup.js
export default app;
