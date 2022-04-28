import React from "react";
import "./ErrorBanner.css";

const ErrorBanner = ({ error }) => {
  return (
    <>
      {error ? (
        <div className="error-banner">
          <h3>{error.errorType}</h3>
          <p>{error.errorMessage}</p>
        </div>
      ) : null}
    </>
  );
};

export { ErrorBanner };
