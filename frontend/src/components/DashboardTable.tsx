import { useNavigate } from "react-router-dom";

const DashboardTable = () => {
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
                {[0, 1, 2, 3, 4].map((i) => (
                  <tr
                    key={i}
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={handleNavigation}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      Limu buna
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      0x8dc2C8e...
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      ORIGIN
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      <p className="bg-indigo-400 px- py-0.5 rounded-xl text-center text-white text-xs">
                        Created
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      Lorem ipsum dolor sit amet...
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-start">
                      Septmber 12, 2024
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
