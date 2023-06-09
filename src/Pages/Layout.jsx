import React from "react";
import Nav from "../components/Layout/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Layout/Footer/Footer";

export default function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
