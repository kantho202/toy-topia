// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkjibMcPkWtBp5AOtRWMwqBk1B63CCbwA",
  authDomain: "toy-topiya.firebaseapp.com",
  projectId: "toy-topiya",
  storageBucket: "toy-topiya.firebasestorage.app",
  messagingSenderId: "569369630283",
  appId: "1:569369630283:web:9e9fcbab0846c93e259fce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;