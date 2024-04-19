import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Templates/Navigation";
const Root = () => {
  return (
    <>
      <main className="mx-5">
        <Navigation />
        <Outlet />
      </main>
    </>
  );
};

export default Root;
