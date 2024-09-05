import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { dashboardContent } from "../utils/constants";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`w-full ${className}`}>
      <nav className="h-16 flex justify-between  items-center bg-white/30 backdrop-blur-md backdrop-opacity-70 relative z-10 px-5">
        {/* Search Bar */}
        <div className="hidden lg:flex w-full pr-6">
          <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaSearch className="text-gray-400" size={16} />
              </div>
              <input
                className="border border-gray-200 focus:border-gray-400 rounded w-full text-sm text-gray-700 bg-gray-50 pl-12 py-2.5 focus:outline-none transition duration-200 focus:ring-gray-950"
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>

        {/* logo for mobile view */}
        <div className="flex lg:hidden justify-center items-center gap-2 py-4">
          <img
            src="/fissetLogo.png"
            alt="Logo Image"
            className="w-9 h-9 bg-gray-950 p-1
              rounded-full"
          />
          <h1 className="text-2xl font-semibold text-gray-900">Fisset.</h1>
        </div>

        <div className="relative flex items-center space-x-4">
          <div
            className="relative group cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <img
              className="w-11 h-11 border-2 p-1 border-gray-300 rounded-full "
              src="/User1.png"
              alt="User Avatar"
            />
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
          </div>

          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden z-20"
              style={{ top: "90%" }}
            >
              <ul className="flex flex-col">
                {dashboardContent.map((item) => (
                  <Link key={item.href} to={item.href}>
                    <li className="py-3 px-4 hover:bg-gray-100 text-sm text-gray-800 cursor-pointer flex items-center gap-3 transition-all duration-150 ease-in-out">
                      <item.icon className="text-gray-950  transition duration-150" />
                      <span className="font-medium text-gray-950">
                        {item.label}
                      </span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
