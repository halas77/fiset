import { AiOutlineClose } from "react-icons/ai";
import { userRoles } from "../utils/constants";

interface CreateUserModalProp {
  setOpenModal: (open: boolean) => void;
}

const CreateUserModal = ({ setOpenModal }: CreateUserModalProp) => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full">
        <div className="flex justify-between items-start mb-6 border-b pb-2">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Create New User
            </h3>
            <p className="text-xs text-gray-500 mt-1 ml-1">
              Please enter the user's wallet address and select their role.
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

        <form>
          <div className="grid gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Wallet Address
              </label>
              <input
                type="text"
                name="walletAddress"
                className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:border-gray-950 focus:ring-gray-950"
                placeholder="Enter user's wallet address"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                * Provide the user's blockchain wallet address.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <select className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-gray-950 focus:ring-gray-950 disabled:opacity-50 disabled:pointer-events-none">
                <option value="" disabled selected>
                  Select user role
                </option>
                {userRoles
                  .filter((role) => role !== "All")
                  .map((role) => (
                    <option value={role}>{role}</option>
                  ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">
                * Choose the appropriate role for the user.
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gray-950 text-white text-sm rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              Create user
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUserModal;
