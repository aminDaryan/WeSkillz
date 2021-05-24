import React from "react";
import { Redirect, Route } from "react-router-dom";

// Utils
import axios from "axios";
import PropTypes from "prop-types";
import { refreshToken } from "Routes/auth";

export default function PrivateRote({ component: Component, ...rest }) {
  const token = sessionStorage.getItem("token");
  let isAuthenticated = false;

  if (token) {
    axios.defaults.headers.common = {
      Authorization: `bearer ${JSON.parse(token).accessToken}`,
    };

    isAuthenticated = true;

    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response && error.response.status === 401) {
          const theRefreshToken = JSON.parse(token).refreshToken;
          const userEmail = JSON.parse(
            sessionStorage.getItem("user-info")
          ).email;
          refreshToken({ email: userEmail, refreshToken: theRefreshToken });
        } else return Promise.reject(error);
      }
    );
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
