import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";

// Use your config values here.
firebase.initializeApp({
  apiKey: "AIzaSyBq1j1ebkdyQqaI6-nSeGSOT7uvKVBflvE",
  authDomain: "weskillztask.firebaseapp.com",
  projectId: "weskillztask",
  storageBucket: "weskillztask.appspot.com",
  messagingSenderId: "594622817813",
  appId: "1:594622817813:web:95a0dc0ecd942226a3101c",
  measurementId: "G-VGY5CE1ZB5"
  });


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
