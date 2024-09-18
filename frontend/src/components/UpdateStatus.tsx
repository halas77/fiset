import { AiOutlineClose } from "react-icons/ai";
import { productStatus } from "../utils/constants";
import { changeStatus } from "../contract/manageProduct";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface UpdateStatusProps {
  setOpenModal: (open: boolean) => void;
}

const UpdateStatus = ({ setOpenModal }: UpdateStatusProps) => {
  const [status, setStatus] = useState("");
  const [remarks, setRemarks] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const item = location.state.item;

  const navigate = useNavigate();

  const handleStatus = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const itemId = item.id;
      await changeStatus({ itemId, status, remarks });
      setLoading(false);
      setOpenModal(false);
      navigate("/products");
    } catch (error) {
      console.log("error", error);
      alert("Something went wrong!");
      setLoading(false);
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
              Enter product status and remark to update the status of a product
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpenModal(false)}
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
                Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-gray-950 focus:ring-gray-950 disabled:opacity-50 disabled:pointer-events-none transition duration-300  ease-in-out"
              >
                <option value="" disabled selected>
                  Select status
                </option>
                {productStatus
                  .filter((i) => i !== "All")
                  .map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">
                * Choose the appropriate status.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Remarks
              </label>
              <textarea
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                name="origin"
                rows={3}
                className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-gray-950 focus:ring-gray-950  placeholder-gray-400 transition duration-300  ease-in-out"
                placeholder="Remarks..."
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                * Provide clear and concise description.
              </p>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full py-3 px-4 bg-gray-950 text-white text-sm rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700 disabled:bg-gray-500"
            >
              {loading ? "Updating..." : " Update status"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateStatus;
