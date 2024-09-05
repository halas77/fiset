import { useState } from "react";
import Layout from "../components/Layout";
import ProductDetailList from "../components/ProductDetailList";
import ProductTimeline from "../components/ProductTimeline";
import { RxUpdate } from "react-icons/rx";
import UpdateStatus from "../components/UpdateStatus";

const ProductDetail = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Layout>
      {/* Header Section */}
      <header className="text-gray-900 pt-2 px-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold tracking-wide">Product name</h1>
          <p className="mt-1 text-xs text-gray-950  pb-2">
            Here you can manage product name
          </p>
        </div>
        <button
          onClick={() => setOpenModal(true)}
          className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded border border-gray-200 bg-gray-950 text-white shadow-sm hover:bg-gray-800 focus:outline-none  disabled:pointer-events-none "
        >
          <RxUpdate size={18} />
          Update status
        </button>
      </header>
      {/* open modal */}
      {openModal && <UpdateStatus setOpenModal={setOpenModal} />}

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6">
        {/* Product Attributes */}
        <ProductDetailList />

        {/* Placeholder for future content */}
        <div className="block rounded-lg p-6 bg-white">
          <ProductTimeline />
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
