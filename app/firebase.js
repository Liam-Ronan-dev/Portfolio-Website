import { initializeApp } from "firebase/app";
import * as dotenv from 'dotenv'
// https://firebase.google.com/docs/web/setup#available-libraries

dotenv.config()

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "liam-portfolio-732d6.firebaseapp.com",
  projectId: "liam-portfolio-732d6",
  storageBucket: "liam-portfolio-732d6.appspot.com",
  messagingSenderId: "895231720675",
  appId: "1:895231720675:web:285b0580da371e98d719d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);