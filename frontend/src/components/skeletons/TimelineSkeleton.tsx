
const TimelineSkeleton = () => {
  return (
    <div className="flex gap-x-3 animate-pulse">
      <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
        <div className="relative z-10 size-7 flex justify-center items-center">
          <div className="size-2 rounded-full bg-gray-200"></div>{" "}
        </div>
      </div>

      <div className="grow pt-0.5 pb-8">
        <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>{" "}
        <div className="h-5 w-3/4 bg-gray-200 rounded mb-1"></div>{" "}
        <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>{" "}
        <div className="h-4 w-5/6 bg-gray-200 rounded mb-2"></div>{" "}
        <div className="flex items-center gap-x-2 mt-1">
          <div className="h-5 w-5 bg-gray-200 rounded-full"></div>{" "}
          <div className="h-4 w-1/2 bg-gray-200 rounded"></div>{" "}
        </div>
      </div>
    </div>
  );
};

export default TimelineSkeleton;
