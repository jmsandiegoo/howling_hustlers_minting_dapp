import React from "react";
import "./MainPage.css";
import { Outlet } from "react-router-dom";
import { ErrorBanner } from "../components/ErrorBanner";
import { Navbar } from "../components/Navbar";
import { useSelector } from "react-redux";

const MainPageLayout = () => {
  const metamask = useSelector((state) => state.metamask);
  const app = useSelector((state) => state.app);

  return (
    <div className="app-wrapper">
      {app.error && <ErrorBanner error={app.error} />}
      <Navbar />
      <Outlet />
    </div>
  );
};

export { MainPageLayout };
