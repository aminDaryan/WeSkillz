import React from "react";

// Utils
import PropTypes from "prop-types";

export default function Input({ header, placeholder, setInput }) {
  return (
    <label className="w-full">
      <span className="text-green-600 font-bold">{header}</span>
      <input
        className="w-full border border-green-600 focus-visible:border-green-600 rounded-md placeholder-green-600 placeholder-opacity-60 mt-5 mb-6 py-4 px-5 "
        placeholder={placeholder}
        onChange={e => setInput(e.target.value)}
      />
    </label>
  );
}

Input.defaultProps = {
  header: "",
  placeholder: "",
  setInput: () => {},
};

Input.propTypes = {
  header: PropTypes.string,
  placeholder: PropTypes.string,
  setInput: PropTypes.func,
};
