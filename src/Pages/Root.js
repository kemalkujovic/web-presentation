import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Templates/Navigation";
import Footer from "../components/Footer";
const Root = () => {
  return (
    <>
      <main className="mx-5">
        <Navigation />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
