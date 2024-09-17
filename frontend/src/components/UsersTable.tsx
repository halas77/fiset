const UsersTable = () => {
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto  w-[22rem] sm:w-[30rem] md:w-full [&::-webkit-scrollbar]:w-0">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg shadow overflow-hidden  ">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-200">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase "
                  >
                    User adrress
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase "
                  >
                    User Role
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase "
                  >
                    time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase "
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-gray-50">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <tr key={i} className="">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      0x8dc2C8ecDFr31...
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      <p className=" px-0.5 py-0.5 rounded-xl  uppercase text-xs">
                        Admin
                      </p>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-start">
                      Septmber 12, 2024
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-start flex gap-2">
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-2 text-xs rounded-lg bg-red-200 px-2 py-0.5 border border-transparent text-red-700 hover:bg-red-300 focus:outline-none  disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Revoke access
                      </button>
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

export default UsersTable;
