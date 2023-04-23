// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDlpHu0D9hKzewlA4Cy9InGUn4iuIdmok",
    authDomain: "fir-web-84528.firebaseapp.com",
    projectId: "fir-web-84528",
    storageBucket: "fir-web-84528.appspot.com",
    messagingSenderId: "672413864028",
    appId: "1:672413864028:web:28be2e0cec5761af56d699",
    measurementId: "G-9HRY5Q8Y4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { app, auth, provider }