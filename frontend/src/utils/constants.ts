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
    href: "/products",
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
    href: "/connect-wallet",
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
    href: "/products",
  },
  {
    title: "Transitted products",
    Icon: GrTransaction,
    status: "54",
    href: "/products",
  },
  {
    title: "Delivered products",
    Icon: TbTruckDelivery,
    status: "5",
    href: "/products",
  },
  {
    title: "Total users",
    Icon: FiUsers,
    status: "20",
    href: "/users",
  },
];

export const productStatus = ["All", "Created", "Transitted", "Delivered"];

export const userRoles = [
  "All",
  "Admin",
  "Producer",
  "Supplier",
  "Distributor",
  "Inspector",
];

export const productDummyData = [
  {
    id: 1,
    productName: "Limu Buna",
    owner: "0x8dc2C8e...",
    status: "Created",
    state: "Created",
    location: "Ethiopia - Limu",
    remarks: "Coffee beans harvested at high altitude.",
    date: "September 12, 2024",
  },
  {
    id: 2,
    productName: "Yirgacheffe",
    owner: "0x5ac1E4a...",
    status: "Transitted",
    state: "In Progress",
    location: "Ethiopia - Yirgacheffe",
    remarks: "Washed and dried at the processing station.",
    date: "September 14, 2024",
  },
  {
    id: 3,
    productName: "Sidamo Buna",
    owner: "0x9b8bF7c...",
    status: "Delivered",
    state: "Shipped",
    location: "Ethiopia - Sidamo",
    remarks: "Ready for export, in transit.",
    date: "September 16, 2024",
  },
  {
    id: 4,
    productName: "Harrar Buna",
    owner: "0xa1d5D4e...",
    status: "Rejected",
    state: "Stored",
    location: "Ethiopia - Harrar",
    remarks: "Stored in a warehouse awaiting delivery.",
    date: "September 18, 2024",
  },
  {
    id: 5,
    productName: "Guji Buna",
    owner: "0xc3d8C6f...",
    status: "DELIVERED",
    state: "Completed",
    location: "Ethiopia - Guji",
    remarks: "Delivered to the buyer.",
    date: "September 20, 2024",
  },
];
