import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { producerChange } from "../contract/manageProduct";
import { productStatus } from "../utils/constants";
import { useLocation } from "react-router-dom";

interface UpdateStatusProps {
  setOpenProducerModal: (open: boolean) => void;
}

const ProducerModal = ({ setOpenProducerModal }: UpdateStatusProps) => {
  const [account, setAccount] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const item = location.state.item;

  const handleStatus = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const itemId = item.id;
    try {
      setLoading(true);
      await producerChange({ itemId, account, address });
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
      alert("Something went wrong!");
    }
  };
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center px-2">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full">
        <div className="flex justify-between items-start mb-6 border-b pb-2">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Update Product Status
            </h3>
            <p className="text-xs text-gray-500 mt-1 ml-1">
              Enter product remark to update the status of a product
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpenProducerModal(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <AiOutlineClose size={22} />
          </button>
        </div>

        <form onSubmit={handleStatus}>
          <div className="grid gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Wallet address
              </label>
              <input
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                type="text"
                name="walletAddress"
                className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:border-gray-950 focus:ring-gray-950 transition ease-in-out duration-300"
                placeholder="Enter user's wallet address"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                * Input the user address.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                name="walletAddress"
                className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:border-gray-950 focus:ring-gray-950 transition ease-in-out duration-300"
                placeholder="Enter location"
                required
              />
              <p className="text-xs text-gray-500 mt-1">* Provide location.</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-gray-950 text-white text-sm rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700 disabled:bg-gray-600"
            >
              {loading ? "Updating ..." : " Update status"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProducerModal;
