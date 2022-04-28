import React from "react";
import "./MainPage.css";
import { Outlet } from "react-router-dom";
import { ErrorBanner } from "../components/ErrorBanner";
import { Navbar } from "../components/Navbar";
import { useSelector } from "react-redux";

const MainPageLayout = () => {
  const metamask = useSelector((state) => state.metamask);

  return (
    <div className="app-wrapper">
      {metamask.error && <ErrorBanner error={metamask.error} />}
      <Navbar />
      <Outlet />
    </div>
  );
};

export { MainPageLayout };
