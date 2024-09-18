import { roleData } from "../utils/constants";

const DefineRoles = () => {
  return (
    <div className="max-w-6xl px-4 py-4 mx-auto">
      <div className="grid md:grid-cols-2 gap-3 sm:gap-6">
        {roleData.map((item) => (
          <div
            key={item.label}
            className="group flex flex-col bg-white/70 border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition -900"
          >
            <div className="p-4 md:p-5">
              <div className="flex gap-x-5">
                <item.icon className="shrink-0" />

                <div className="grow">
                  <h3 className="font-semibold text-gray-800 :text-neutral-400 ">
                    {item.label}
                  </h3>
                  <p className="text-sm text-gray-500 -500">{item.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DefineRoles;
