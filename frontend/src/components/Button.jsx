import React from "react";
import "./Button.css";

const Button = ({ type = "primary", handleClick, children }) => {
  return (
    <button className={`${type}-btn btn`} onClick={handleClick}>
      {children}
    </button>
  );
};
export { Button };
