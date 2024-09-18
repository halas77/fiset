const SkeletonCard = () => {
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl animate-pulse">
      <div className="p-4 md:p-5 flex justify-between gap-x-3">
        <div>
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
          <div className="mt-3 flex items-center gap-x-2">
            <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>
        <div className="shrink-0 flex justify-center items-center size-[36px] bg-gray-200 rounded-full">
         
        </div>
      </div>

      <div className="py-3 px-4 md:px-5 bg-gray-100 border-t border-gray-200 rounded-b-xl">
        <div className="h-4 w-20 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
