import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { dashboardContent, socialLinks } from "../utils/constants";
import { FiLogOut } from "react-icons/fi";
import { useMainContext } from "../context/MainContext";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const { disconnectWallet } = useMainContext();

  const handleLogout = () => {
    navigate("/connect-wallet");
    disconnectWallet();
  };

  return (
    <div
      className={`absolute lg:relative w-[17rem] h-screen shadow bg-gray-950 hidden lg:block ${className}`}
    >
      <Link
        to={"/"}
        className="h-16 w-full flex items-center px-4 gap-3 shadow shadow-white/20"
      >
        <img src="/fissetLogo.png" alt="Logo Image" className="w-5 h-5" />
        <h1 className="text-xl font-medium text-white">Fisset.</h1>
      </Link>
      <ul className="py-6">
        {dashboardContent.map((item) => (
          <Link to={item.href} key={item.href}>
            <li
              className={`pl-5 cursor-pointer text-sm leading-3 tracking-normal pb-4 pt-5 flex items-center text-indigo-50 hover:bg-gray-800 transition hover:border-l-2 ease-in-out duration-300 ${
                location.pathname === item.href
                  ? "bg-gray-800 text-white border-l-2"
                  : ""
              }`}
            >
              <item.icon className="mr-3" size={20} />
              {item.label}
            </li>
          </Link>
        ))}
        <li
          onClick={handleLogout}
          className={`pl-5 cursor-pointer text-sm leading-3 tracking-normal pb-4 pt-5 flex items-center text-indigo-50 hover:bg-gray-800 transition hover:border-l-2 ease-in-out duration-300 ${
            location.pathname === "/connect-wallet"
              ? "bg-gray-800 text-white border-l-2"
              : ""
          }`}
        >
          <FiLogOut className="mr-3" size={20} />
          Logout
        </li>
      </ul>

      {/* Footer Section */}
      <div className="absolute bottom-6 left-0 w-full px-4 text-start text-white text-xs border-t border-white/20 pt-4 space-y-1">
        <p>&copy; {currentYear} Fisset. All rights reserved.</p>
        <p className="pl-3">Powered by Fisset.</p>
        <div className="flex justify-start pt-1 gap-6 pl-3">
          {socialLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <item.icons
                className="text-white hover:text-gray-400 transition-colors duration-200"
                size={18}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
