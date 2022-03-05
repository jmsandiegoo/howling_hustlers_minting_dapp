import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.css";
import { LandingPage } from "./pages/LandingPage";

// This is the entry point of your application, but it just renders the Dapp
// react component. All of the logic is contained in it.

ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
  document.getElementById("root")
);
