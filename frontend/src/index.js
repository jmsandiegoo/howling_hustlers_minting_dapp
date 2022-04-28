import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import "normalize.css";
import "./index.css";
import { LandingPage } from "./pages/LandingPage";
import { MainPageLayout } from "./layouts/MainPageLayout";
import { HomePage } from "./pages/HomePage";
import { MintPage } from "./pages/MintPage";

// This is the entry point of your application, but it just renders the Dapp
// react component. All of the logic is contained in it.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<MainPageLayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/mint" element={<MintPage />} />
            <Route path="/collection" />
            <Route path="/my-hustlers" />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
