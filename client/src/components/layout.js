import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function Layout() {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 page-crucial">
        <Header />
      </div>
      <div className="min-h-80vh">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
