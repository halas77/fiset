import { useState } from "react";
import Layout from "../components/Layout";
import Tabs from "../components/Tabs";
import { productStatus } from "../utils/constants";
import { MdAddCircleOutline } from "react-icons/md";
import ProductsTable from "../components/ProductsTable";
import CreateProductModal from "../components/CreateProductModal";

const Products = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [openModal, setOpenModal] = useState(false);

  return (
    <Layout>
      <header className="text-gray-900 py-2  sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold tracking-wide">
          Manage products
        </h1>
        <p className="mt-1 text-xs text-gray-500 border-b pb-2">
          Here you can manage prodcuts
        </p>
      </header>
      <div className="text-gray-900 py-2  sm:px-6 lg:px-8 mb-3 flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center items-start gap-2">
        <Tabs
          data={productStatus}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <button
          onClick={() => setOpenModal(true)}
          className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded border border-gray-200 bg-gray-950 text-white shadow-sm hover:bg-gray-800 focus:outline-none  disabled:pointer-events-none "
        >
          <MdAddCircleOutline size={20} />
          Create product
        </button>
      </div>

      <div className="max-w-[85rem] mx-auto  sm:px-6 lg:px-8">
        <ProductsTable activeTab={activeTab} />
      </div>
      <div>
        {openModal && <CreateProductModal setOpenModal={setOpenModal} />}
      </div>
    </Layout>
  );
};

export default Products;
