import React from "react";
import "./Modal.css";

const Modal = ({ classNameProps, children }) => {
  return (
    <div className="modal-overlay">
      <aside className={["modal", ...classNameProps].join(" ")}>
        {children}
      </aside>
    </div>
  );
};

export { Modal };
