import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import SignInPage from "Pages/SignIn";
import PhoneBookPage from "Pages/PhoneBook";
import PrivateRoute from "Router/PrivateRote";

function Main() {
  return (
    <div className="w-full mt-24" style={{ height: "calc(100% - 6rem)" }}>
      <Switch>
        <PrivateRoute path="/phone-book" component={PhoneBookPage} />
        <Route path="/signin" render={(props) => <SignInPage {...props} />} />
      </Switch>
    </div>
  );
}

export default Main;
