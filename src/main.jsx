import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfvNry1b4Fp2dXOaR4_oeAETtmFgcEpmI",
  authDomain: "ecommerce-fya.firebaseapp.com",
  projectId: "ecommerce-fya",
  storageBucket: "ecommerce-fya.appspot.com",
  messagingSenderId: "434914464887",
  appId: "1:434914464887:web:c724950e7a4bcf94272272"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  //</React.StrictMode>,
)
