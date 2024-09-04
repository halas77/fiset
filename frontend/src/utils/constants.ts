import { FiGrid, FiUsers, FiSettings, FiLogOut } from "react-icons/fi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import { PiTelegramLogo } from "react-icons/pi";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";

export const dashboardContent = [
  {
    label: "Dashboard",
    href: "/",
    icon: FiGrid,
  },
  {
    label: "Manage Products",
    href: "/prodcuts",
    icon: MdOutlineProductionQuantityLimits,
  },
  {
    label: "Manage Users",
    href: "/users",
    icon: FiUsers,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: FiSettings,
  },

  {
    label: "Logout",
    href: "/logout",
    icon: FiLogOut,
  },
];

export const socialLinks = [
  {
    icons: RiGithubLine,
    href: "https://github.com/yourprofile",
  },
  {
    icons: PiTelegramLogo,
    href: "https://t.me/yourprofile",
  },
  {
    icons: RiLinkedinBoxLine,
    href: "https://linkedin.com/in/yourprofile",
  },
  {
    icons: FiMail,
    href: "mailto:youremail@example.com",
  },
];
