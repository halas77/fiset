import { useNavigate } from "react-router-dom";
import { getItems } from "../contract/manageProduct";
import { useEffect, useState } from "react";
import { ItemType } from "../utils/TypeDeclarations";
import SkeletonRow from "./skeletons/SkeletonRow";
import NotFound from "./NotFound"; // Import the NotFound component

interface ProductTableProp {
  activeTab: string;
}

const ProductsTable = ({ activeTab }: ProductTableProp) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<ItemType[]>([]);
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/product/productId");
  };

  const handleGetItems = async () => {
    try {
      setLoading(true);
      const items = await getItems();
      console.log("items", items);
      setItems(items);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetItems();
  }, []);

  const filteredItems = activeTab === "All" ? items : items.filter(item => item.status === activeTab);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto w-[22rem] sm:w-[30rem] md:w-full ">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-200">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase whitespace-nowrap"
                  >
                    Product name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase whitespace-nowrap"
                  >
                    Current owner
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase whitespace-nowrap"
                  >
                    Location
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase whitespace-nowrap"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase whitespace-nowrap"
                  >
                    Remarks
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase whitespace-nowrap"
                  >
                    Time
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-gray-50">
                {loading ? (
                  [0, 1, 2, 3].map((i) => <SkeletonRow key={i} />)
                ) : filteredItems.length === 0 ? (
                  <tr>
                    <td colSpan={6}>
                      <NotFound /> 
                    </td>
                  </tr>
                ) : (
                  filteredItems.map((item) => (
                    <tr
                      key={item.id}
                      className="cursor-pointer hover:bg-gray-100"
                      onClick={handleNavigation}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                        {item.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                        {item.owner.slice(0, 20)}...
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                        {item.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                        <p className="inline-flex items-center gap-x-2 text-xs rounded-lg bg-indigo-200 px-2 py-0.5 border border-transparent text-indigo-700 focus:outline-none disabled:opacity-50 disabled:pointer-events-none uppercase">
                          {item.status}
                        </p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                        {item.remarks}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-start">
                        {item.timestamp}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsTable;
