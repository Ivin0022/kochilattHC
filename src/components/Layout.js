import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="grid min-h-screen grid-rows-layout">
      <Header />
      <main className="flex items-center justify-center bg-gray-100 p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
