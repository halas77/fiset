import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-auto">
      <Sidebar className="sticky left-0 top-0 h-screen w-80 bg-gray-800" />

      <div className="flex flex-col flex-1">
        <Navbar className="sticky top-0 z-10 h-16" />

        <main className="flex-1 overflow-x-auto p-4  [&::-webkit-scrollbar]:w-2.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300  bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
