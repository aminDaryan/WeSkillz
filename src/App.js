import React from "react";

// Components
import Main from "Router/Router";
import NavBar from "Components/NavBar";

// Utils
import { Provider } from 'react-redux';
import store from "Redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// context
import ContactsContextProvider from "Context/ContactsContext";

function App() {
  return (
    <Router>
      <ContactsContextProvider>
        <Provider store={store}>
          <div className="relative bg-green-50 bg-opacity-25">
            <NavBar />
            <Main />
          </div>
        </Provider>
      </ContactsContextProvider>
    </Router>
  );
}

export default App;
