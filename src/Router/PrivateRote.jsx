import React from "react";
import { Redirect, Route } from "react-router-dom";

// Utils
import axios from "axios";
import PropTypes from "prop-types";

export default function PrivateRote({ component: Component, ...rest }) {
  const token = localStorage.getItem("token");
  let isAuthenticated = false;
  if (token) {
    axios.defaults.headers.common.token = token;
    isAuthenticated = true;
  }
  
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
}

PrivateRote.propTypes = {
  component: PropTypes.func.isRequired,
};