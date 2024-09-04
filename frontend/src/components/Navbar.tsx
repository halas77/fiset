import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div className={`w-full ${className}`}>
      <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10">
        <div className="hidden lg:flex w-full pr-6">
          <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
            <div className="relative w-full">
              <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                <FaSearch className="text-gray-500" size={16} />
              </div>
              <input
                className=" border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-500 bg-gray-100 pl-12 py-3  "
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center px-6">
          <BsThreeDotsVertical size={23} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
