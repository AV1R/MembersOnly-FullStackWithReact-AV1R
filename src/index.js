import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';
import 'firebase/analytics'
import 'firebase/auth'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_Q8HEftGOnuheEUNROwTXdMWzy0PNviI",
  authDomain: "marketplace-curso-85f13.firebaseapp.com",
  databaseURL: "https://marketplace-curso-85f13-default-rtdb.firebaseio.com",
  projectId: "marketplace-curso-85f13",
  storageBucket: "marketplace-curso-85f13.appspot.com",
  messagingSenderId: "584925441107",
  appId: "1:584925441107:web:75a5da40573e371a016aa6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
