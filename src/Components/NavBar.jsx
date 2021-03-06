import React from "react";
import { useHistory, useLocation } from "react-router";

// Redux
import { useDispatch } from "react-redux";
import { removeToken, removeUserInfo } from "Redux/actions";

export default function NavBar() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch(null);

  function handleLogOut() {
    dispatch(removeToken())
    dispatch(removeUserInfo())
    history.push("/signin");
  }
  

  function handleSignIn() {
    history.push("/signin");
  }
  
  return (
    <nav className="fixed -inset-x-0 top-0 flex justify-between items-center h-24 px-8 sm:px-20 py-6 bg-white shadow-md z-50">
      <div>
        <span className="text-3xl sm:text-5xl font-bold text-green-600">Phonebook</span>
      </div>
      <div>
        {location.pathname === "/phone-book" ? (
          <button className="bg-transparent" onClick={handleLogOut}>
            <span className="text-xl sm:text-2xl font-bold text-green-600">Logout</span>
          </button>
        ) : (
          <button className="bg-transparent" onClick={handleSignIn}>
            <span className="text-xl sm:text-2xl font-bold text-green-600">Login</span>
          </button>
        )}
      </div>
    </nav>
  );
}
