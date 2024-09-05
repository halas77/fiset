import { useNavigate } from "react-router-dom";
import { productDummyData } from "../utils/constants";

interface ProductTableProp {
  activeTab: string;
}

const ProductsTable = ({ activeTab }: ProductTableProp) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/product/productId");
  };

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg shadow overflow-hidden  ">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-200">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase "
                  >
                    Product name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase "
                  >
                    Current owner
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase "
                  >
                    Location
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase "
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase "
                  >
                    Remarks
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase "
                  >
                    time
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-gray-50">
                {activeTab === "All" ? (
                  <>
                    {productDummyData.map((item) => (
                      <tr
                        key={item.id}
                        className="cursor-pointer hover:bg-gray-100"
                        onClick={handleNavigation}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                          {item.productName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                          {item.owner}
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                          {item.location}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                          <p className="inline-flex items-center gap-x-2 text-xs rounded-lg bg-indigo-200 px-2 py-0.5 border border-transparent text-indigo-700 focus:outline-none  disabled:opacity-50 disabled:pointer-events-none uppercase">
                            {item.status}
                          </p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                          {item.remarks}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-start">
                          {item.date}
                        </td>
                      </tr>
                    ))}
                  </>
                ) : (
                  <>
                    {productDummyData
                      .filter((item) => item.status === activeTab)
                      .map((item) => (
                        <tr
                          key={item.id}
                          className="cursor-pointer hover:bg-gray-100"
                          onClick={handleNavigation}
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                            {item.productName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                            {item.owner}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                            {item.location}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                            <p className="inline-flex items-center gap-x-2 text-xs rounded-lg bg-indigo-200 px-2 py-0.5 border border-transparent text-indigo-700 hover:bg-indigo-300 focus:outline-none  disabled:opacity-50 disabled:pointer-events-none uppercase">
                              {item.status}
                            </p>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                            {item.remarks}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-start">
                            {item.date}
                          </td>
                        </tr>
                      ))}
                  </>
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
