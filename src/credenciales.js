// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBalvoQVfOz67r6vgZ6RFiAlvOE1H9cH5I",
  authDomain: "artesanias-5869c.firebaseapp.com",
  projectId: "artesanias-5869c",
  storageBucket: "artesanias-5869c.appspot.com",
  messagingSenderId: "872275849055",
  appId: "1:872275849055:web:3a4f10d81231e529de50ea"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const auth = getAuth(appFirebase)
export default auth;

