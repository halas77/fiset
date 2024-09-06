import { AiOutlineClose } from "react-icons/ai";

interface CreateProductModalProp {
  setOpenModal: (open: boolean) => void;
}

const CreateProductModal = ({ setOpenModal }: CreateProductModalProp) => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-2">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full">
        <div className="flex justify-between items-start mb-6 border-b pb-2">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Create New Product
            </h3>
            <p className="text-xs text-gray-500 mt-1 ml-1">
              Enter product name and origin for traceability and transparency.
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
                Product Name
              </label>
              <input
                type="text"
                name="productName"
                className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-gray-950 focus:ring-gray-950  placeholder-gray-400 transition duration-300  ease-in-out"
                placeholder="e.g., Organic Coffee Beans"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                * Enter the name of the product.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Origin
              </label>
              <input
                type="text"
                name="origin"
                className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-gray-950 focus:ring-gray-950  placeholder-gray-400 transition duration-300  ease-in-out"
                placeholder="e.g. Keffa, Ethiopia"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                * Specify the origin of the product.
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gray-950 text-white text-sm rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              Create Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProductModal;
