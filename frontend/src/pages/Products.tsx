import Layout from "../components/Layout";

const Products = () => {
  return (
    <Layout>
      {/* Header Section */}
      <header className="text-gray-900 py-2 px-8 mb-6 ">
        <h1 className="text-2xl font-semibold tracking-wide">Manage products</h1>
        <p className="mt-1 text-xs text-gray-500 border-b pb-2">
          Here you can manage prodcuts
        </p>
      </header>
    </Layout>
  );
};

export default Products;
