import { FiUser } from "react-icons/fi";
import { MdRestartAlt } from "react-icons/md";
import {
  HiOutlineClock,
  HiOutlineInformationCircle,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaRegCommentDots } from "react-icons/fa";
import { BsMinecart } from "react-icons/bs";
import { useLocation } from "react-router-dom";

const ProductDetailList = () => {
  const location = useLocation();
  const item = location.state.item;
  return (
    <div className="bg-white rounded-lg p-6">
      <p className="text-xs text-gray-700 leading-relaxed">
        Effective product management ensures that each item meets the highest
        quality standards, maintains transparency across the supply chain, and
        provides accurate traceability from origin to end user. This guide aims
        to support a streamlined process, reduce inefficiencies, and promote
        accountability throughout the product's lifecycle.
      </p>

      <div className="grid py-6 space-y-3 bg-white rounded-lg divide-y divide-gray-100 text-sm text-gray-800">
        {/* Name */}
        <div className="flex items-center gap-4 py-3">
          <BsMinecart size={15} className="text-gray-950" />
          <p className="font-semibold text-gray-700">Product:</p>
          <p className="text-gray-700">{item.name}</p>
        </div>

        {/* Origin */}
        <div className="flex items-center gap-4 py-3">
          <MdRestartAlt size={17} className="text-gray-950" />
          <p className="font-semibold text-gray-700">Origin:</p>
          <p className="text-gray-700">{item.origin}</p>
        </div>

        {/* Current Owner */}
        <div className="flex items-center gap-4 py-3">
          <FiUser size={15} className="text-gray-950" />
          <p className="font-semibold text-gray-700">Current Owner:</p>
          <p className="text-gray-700">{item.owner.slice(0, 20)}...</p>
        </div>

        {/* Status */}
        <div className="flex items-center gap-4 py-3">
          <HiOutlineInformationCircle size={15} className="text-gray-950" />
          <p className="font-semibold text-gray-700">Status:</p>
          <p
            className={`inline-flex items-center gap-x-2 text-xs rounded-lg bg-indigo-200 px-2 py-0.5 border border-transparent  focus:outline-none  disabled:opacity-50 disabled:pointer-events-none uppercase ${
              item.status !== "Checked"
                ? "text-indigo-700 bg-indigo-200"
                : "bg-green-200 text-green-700"
            }`}
          >
            {item.status}
          </p>
        </div>

        {/* Timestamp */}
        <div className="flex items-center gap-4 py-3">
          <HiOutlineClock size={15} className="text-gray-950" />
          <p className="font-semibold text-gray-700">Timestamp:</p>
          <p className="text-gray-700">{item.timestamp}</p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4 py-3">
          <HiOutlineLocationMarker size={15} className="text-gray-950" />
          <p className="font-semibold text-gray-700">Location:</p>
          <p className="text-gray-700">{item.location}</p>
        </div>

        {/* Remarks */}
        <div className="flex items-center gap-4 py-3">
          <FaRegCommentDots size={15} className="text-gray-950" />
          <p className="font-semibold text-gray-700">Remarks:</p>
          <p className="text-gray-700">{item.remarks}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailList;
