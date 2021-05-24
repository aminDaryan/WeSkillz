import React from "react";

// Components
import Main from "Router/Router";
import NavBar from "Components/NavBar";

// Utils
import { BrowserRouter as Router } from "react-router-dom";

// Redux
import { Provider } from 'react-redux';
import { store, persistor } from "Redux/store";
import { PersistGate } from 'redux-persist/integration/react'


// context
import ContactsContextProvider from "Context/ContactsContext";

function App() {
  return (
    <Router>
      <ContactsContextProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <div className="relative bg-green-50 bg-opacity-25">
              <NavBar />
              <Main />
            </div>
          </PersistGate>
        </Provider>
      </ContactsContextProvider>
    </Router>
  );
}

export default App;
