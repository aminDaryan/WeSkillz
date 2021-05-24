import React, { useRef } from "react";

// Utils
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

export default function Input({
  header,
  placeholder,
  setInput,
  className,
  type,
}) {
  const id = useRef(uuidv4());
  return (
    <div className={`w-full my-3 ${className}`}>
      {header && (
        <label htmlFor={id}>
          <span className="text-green-600 font-bold">{header}</span>
        </label>
      )}
      <input
        id={id}
        type={type || "text"}
        className={`w-full border border-green-600 focus-visible:border-green-600 rounded-md placeholder-green-600 placeholder-opacity-60 py-4 px-5 ${header ? "mt-5" : ""}`}
        placeholder={placeholder}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

Input.defaultProps = {
  header: null,
  placeholder: "",
  className: "",
  type: "",
  setInput: () => {},
};

Input.propTypes = {
  header: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  setInput: PropTypes.func,
};
