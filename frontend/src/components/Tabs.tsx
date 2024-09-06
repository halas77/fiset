interface TabsProps {
  data: string[];
  setActiveTab: (open: string) => void;
  activeTab: string;
}

const Tabs = ({ data, setActiveTab, activeTab }: TabsProps) => {
  return (
    <div>
      <div className="flex">
        <div className="flex bg-gray-200  rounded transition py-1 px-2 ">
          <nav className="flex gap-x-2  overflow-x-auto w-[20rem] sm:w-[30rem] md:w-full [&::-webkit-scrollbar]:w-0">
            {data.map((item: string) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                type="button"
                className={` py-2 px-4 inline-flex items-center gap-x-2  text-xs  focus:outline-none font-medium rounded disabled:pointer-events-none ${
                  activeTab === item ? "bg-gray-950 text-white" : "bg-white text-gray-700 bg-transparent"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
