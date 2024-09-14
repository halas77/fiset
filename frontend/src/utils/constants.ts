import { FiGrid, FiUsers, FiSettings } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { PiTelegramLogo } from "react-icons/pi";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { GrTransaction } from "react-icons/gr";
import abi from "./abi.json";

export const contractAddress = "0x7aaEEDb9596Aab96933645AAbE4A6C67d0Cfb665";
export const contractABI = abi.abi;

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
];

export const socialLinks = [
  {
    icons: RiGithubLine,
    href: "https://github.com/halas77",
  },
  {
    icons: PiTelegramLogo,
    href: "https://t.me/halas7",
  },
  {
    icons: RiLinkedinBoxLine,
    href: "https://www.linkedin.com/in/dawit-mellese/",
  },
  {
    icons: FiMail,
    href: "mailto:dawitm777@gmail.com",
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

type ProductStatusMapping = {
  [key in "0" | "1" | "2" | "3" | "4"]: string;
};

export const productStatusMapping: ProductStatusMapping = {
  "0": "Created",
  "1": "Transitted",
  "2": "Delivered",
  "3": "Accepted",
  "4": "Rejected",
};

export const productStatus = [
  "All",
  "Created",
  "Transitted",
  "Delivered",
  "Accepted",
  "Rejected",
];

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

export const productDetailData = {
  id: 1,
  name: "Ethiopian Coffee",
  origin: "Yirgacheffe, Ethiopia",
  currentOwner: "0x1234567890abcdef1234567890abcdef12345678",
  status: 1,
  timestamp: "2024-09-05",
  location: "Warehouse A, Addis Ababa",
  remarks: "High-quality beans, stored at optimal conditions.",
};

export const timelineData = [
  {
    time: "10:00 AM",
    title: "Product Created",
    description:
      "The product was successfully created and registered in the system.",
    user: "0x123456789ABCDEF",
  },
  {
    time: "11:30 AM",
    title: "Quality Check Completed",
    description:
      "The product passed the quality assurance checks and was approved for dispatch.",
    user: "0xABCDEF123456789",
  },
  {
    time: "01:00 PM",
    title: "Dispatched to Warehouse",
    description:
      "The product was dispatched from the manufacturing unit to the main warehouse.",
    user: "0xFEDCBA987654321",
  },
  {
    time: "03:45 PM",
    title: "In Transit",
    description:
      "The product is currently in transit to the distribution center.",
    user: "0x123ABC456DEF789",
  },
  {
    time: "05:15 PM",
    title: "Delivered to Retailer",
    description:
      "The product was successfully delivered to the retailer for customer sales.",
    user: "0x987FED654CBA321",
  },
];
