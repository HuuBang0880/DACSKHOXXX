import React from "react";
import Nav from "../components/Layout/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Layout/Footer/Footer";

export default function Layout() {
  return (
    <>
      <div className="container px-4 h-[60px] mx-auto flex flex-wrap items-center justify-end">
        <nav className="fixed top-0 left-0 w-full h-[60px] bg-white shadow-lg z-40">
          <Nav />
        </nav>
      </div>

      <Outlet />
      <footer>
        <Footer />
      </footer>
    </>
  );
}
