import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={`w-full ${className}`}>
      <nav className="h-16 flex items-center lg:items-stretch justify-end bg-white/30 backdrop-blur-md backdrop-opacity-70 relative z-10 px-5">
        {/* Search Bar */}
        <div className="hidden lg:flex w-full pr-6">
          <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaSearch className="text-gray-400" size={16} />
              </div>
              <input
                className="border border-gray-200 focus:border-gray-400 rounded w-full text-sm text-gray-700 bg-gray-50 pl-12 py-2.5 focus:outline-none transition duration-200"
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link to="#" className="relative group">
            <img
              className="inline-block w-11 h-11 border-2 p-1 border-gray-200 rounded-full"
              src="/User1.png"
              alt="User Avatar"
            />
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
