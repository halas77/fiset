import { FiGrid, FiUsers, FiSettings, FiLogOut } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { PiTelegramLogo } from "react-icons/pi";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { GrTransaction } from "react-icons/gr";

export const dashboardContent = [
  {
    label: "Dashboard",
    href: "/",
    icon: FiGrid,
  },
  {
    label: "Manage Products",
    href: "/prodcuts",
    icon: AiOutlineShoppingCart,
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

export const dashboardCardsData = [
  {
    title: "Created products",
    Icon: AiOutlineShoppingCart,
    status: "97",
    href: "/users",
  },
  {
    title: "Transitted products",
    Icon: GrTransaction,
    status: "54",
    href: "/users",
  },
  {
    title: "Delivered products",
    Icon: TbTruckDelivery,
    status: "5",
    href: "/users",
  },
  {
    title: "Total users",
    Icon: FiUsers,
    status: "20",
    href: "/users",
  },
];
