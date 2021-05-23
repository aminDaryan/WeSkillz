import React from "react";

// Utils
import { Button } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const TheButton = styled(Button)({
  background: "rgb(0, 149, 92) 0% 0% no-repeat padding-box",
  borderRadius: "6px",
  color: "white",
  width: "100%",
  padding: "1rem 0",
  fontSize: "1.25rem",
  textTransform: "none",
  "&:hover": {
    background: "rgba(0, 149, 92, 0.8)",
  },
});

export default function GreenButton({ onClickFunction, text }) {
  return <TheButton onClick={onClickFunction}>{text}</TheButton>;
}

GreenButton.propTypes = {
    onClickFunction: PropTypes.func.isRequired,
    text: PropTypes.func.text,
};
