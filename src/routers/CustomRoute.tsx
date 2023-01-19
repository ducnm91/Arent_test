import React from "react";
import { Routes, Route, Link, Navigate, Outlet } from "react-router-dom";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";

const CustomRoute = () => {
  return (
    <>
      <Header />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default CustomRoute;
