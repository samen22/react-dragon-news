// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPchtFGsPfG5Rjb_XymiIvstol3xqQBiA",
  authDomain: "react-dragon-news-3244d.firebaseapp.com",
  projectId: "react-dragon-news-3244d",
  storageBucket: "react-dragon-news-3244d.appspot.com",
  messagingSenderId: "128312360764",
  appId: "1:128312360764:web:ec3b1ba6906d26d5cb2839"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
