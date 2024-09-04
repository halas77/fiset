interface TabsProps {
  data: string[];
}

const Tabs = ({ data }: TabsProps) => {
  return (
    <div>
      <div className="flex">
        <div className="flex bg-gray-200  rounded transition py-1 px-2  -600">
          <nav className="flex gap-x-2">
            {data.map((item: string) => (
              <button
                key={item}
                type="button"
                className="bg-white text-gray-700  py-2 px-4 inline-flex items-center gap-x-2 bg-transparent text-xs  hover:text-gray-700 focus:outline-none focus:text-gray-700 font-medium rounded disabled:opacity-50 disabled:pointer-events-none active"
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
