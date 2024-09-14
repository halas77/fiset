import { AiOutlineFileSearch } from "react-icons/ai";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <AiOutlineFileSearch size={64} className="text-gray-400" />
      <h2 className="mt-4 text-lg font-semibold text-gray-800">
        No Data Found
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        Sorry, we couldn't find any data. Please check back later.
      </p>
    </div>
  );
};

export default NotFound;
