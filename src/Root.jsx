import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-465px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
