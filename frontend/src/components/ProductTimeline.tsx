import { timelineData } from "../utils/constants";

const ProductTimeline = () => {
  return (
    <div className="space-y-4">
      {timelineData.reverse().map((item) => (
        <div key={item.time} className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 ">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-400 "></div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="text-xs uppercase text-gray-500">30 Jul, 2023</h3>
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800 ">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-gray-600 -400">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductTimeline;
