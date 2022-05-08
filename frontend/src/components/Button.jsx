import React from "react";
import "./Button.css";

const Button = ({ type = "primary", handleClick, children }) => {
  return (
    <button
      className={`${type}-btn btn`}
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
    >
      {children}
    </button>
  );
};
export { Button };
