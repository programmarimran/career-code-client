// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe-P3vUzGwE3vAlqaVAeQME29OK-4wu9k",
  authDomain: "career-code-65c84.firebaseapp.com",
  projectId: "career-code-65c84",
  storageBucket: "career-code-65c84.firebasestorage.app",
  messagingSenderId: "1013721527111",
  appId: "1:1013721527111:web:7d2dc91531e484222a5262"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
