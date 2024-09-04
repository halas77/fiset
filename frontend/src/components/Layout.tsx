import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar className="sticky left-0 top-0 h-screen w-80 bg-gray-800" />

      <div className="flex flex-col flex-1">
        <Navbar className="sticky top-0 z-10  h-16 bg-white shadow-md" />

        <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
