import React from "react";

// Utils
import { Button } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const TheGrayButton = styled(Button)({
  background: "white 0% 0% no-repeat padding-box",
  borderRadius: "6px",
  color: "gray",
  width: "100%",
  padding: "1rem 0",
  fontSize: "1.25rem",
  textTransform: "none",
  border: "1px solid gray",
});

export default function GreenButton({ onClickFunction, text }) {
  return <TheGrayButton onClick={onClickFunction}>{text}</TheGrayButton>;
}

GreenButton.propTypes = {
    onClickFunction: PropTypes.func.isRequired,
    text: PropTypes.func.text,
};
