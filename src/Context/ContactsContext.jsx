import React, { createContext, useEffect, useState } from "react";

// Utils
import PropTypes from "prop-types";

// firebase
import firebase from "firebase";

// Use your config values here.
firebase.initializeApp({
  apiKey: "AIzaSyBq1j1ebkdyQqaI6-nSeGSOT7uvKVBflvE",
  authDomain: "weskillztask.firebaseapp.com",
  projectId: "weskillztask",
  storageBucket: "weskillztask.appspot.com",
  messagingSenderId: "594622817813",
  appId: "1:594622817813:web:95a0dc0ecd942226a3101c",
  measurementId: "G-VGY5CE1ZB5",
});

const db = firebase.firestore();
db.settings({ timestampsInSnapShots: true });

export const ContactsContext = createContext(null);

export default function ContactsContextProvider({ children }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    db?.collection("Contact").onSnapshot((snapShot) => {
      let changes = snapShot.docChanges();
      changes.forEach((change) => {
        if (change.type === "added") {
          setContacts((prevState) => [...prevState, change.doc.data()]);
        } else if (change.type === "removed") {
          setContacts((prevState) =>
            prevState.filter(
              (contact) => contact.userId !== change.doc.data().userId
            )
          );
        }
      });
    });
  }, [db]);

  return (
    <ContactsContext.Provider value={contacts}>
      {children}
    </ContactsContext.Provider>
  );
}

ContactsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
