import React from "react";

// Components
import Main from "Router/Router";
import NavBar from "Components/NavBar";

// Utils
import { Provider } from 'react-redux';
import store from "Redux/store";
import { BrowserRouter as Router } from "react-router-dom";

// context
import DatabaseContextProvider from "Context/DatabaseContext";

function App() {
  return (
    <Router>
      <DatabaseContextProvider>
        <Provider store={store}>
          <div className="relative bg-green-50 bg-opacity-25">
            <NavBar />
            <Main />
          </div>
        </Provider>
      </DatabaseContextProvider>
    </Router>
  );
}

export default App;
