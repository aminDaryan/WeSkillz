import React from "react";

// Components
import Main from "Router/Router";
import NavBar from "Components/NavBar";

// Utils
import { Provider } from 'react-redux';
import store from "Redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// Firebase
import { FirestoreProvider } from "@react-firebase/firestore";
import firebase from "firebase";
import config from "../firebase.config";

function App() {
  // Firebase Config
  const config = {
    apiKey: "AIzaSyBq1j1ebkdyQqaI6-nSeGSOT7uvKVBflvE",
    authDomain: "weskillztask.firebaseapp.com",
    projectId: "weskillztask",
    storageBucket: "weskillztask.appspot.com",
    messagingSenderId: "594622817813",
    appId: "1:594622817813:web:95a0dc0ecd942226a3101c",
    measurementId: "G-VGY5CE1ZB5"
  }

  return (
    <FirestoreProvider {...config} firebase={firebase}>
      <Router>
        <Provider store={store}>
          <div className="relative bg-green-50 bg-opacity-25">
            <NavBar />
            <Main />
          </div>
        </Provider>
      </Router>
    </FirestoreProvider>
  );
}

export default App;
