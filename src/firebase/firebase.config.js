// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUMCkG9JqMpHHTApqFC6v4HAHQ7xKeHPU",
  authDomain: "auth-firebase-context-ta-e2c71.firebaseapp.com",
  projectId: "auth-firebase-context-ta-e2c71",
  storageBucket: "auth-firebase-context-ta-e2c71.appspot.com",
  messagingSenderId: "391851556008",
  appId: "1:391851556008:web:add1e34a844db6853f569d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app