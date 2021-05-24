import React from "react";
import { Redirect, Route } from "react-router-dom";

// Utils
import axios from "axios";
import PropTypes from "prop-types";
import { refreshToken } from "Apis/auth";

// Redux
import { useSelector } from "react-redux";

export default function PrivateRote({ component: Component, ...rest }) {
  const token = useSelector((state) => state.token);
  const userInfo = useSelector((state) => state.userInfo);
  let isAuthenticated = false;

  if (token) {
    axios.defaults.headers.common = {
      Authorization: `bearer ${token.accessToken}`,
    };

    isAuthenticated = true;

    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response && error.response.status === 401) {
          const theRefreshToken = JSON.parse(token).refreshToken;
          const userEmail = userInfo.email;
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
