import { GoArrowUpRight } from "react-icons/go";
import { LuUser } from "react-icons/lu";
import { useLocation } from "react-router-dom";
import { getAuditTrail } from "../contract/manageProduct";
import { useEffect, useState } from "react";
import { AuditType } from "../utils/TypeDeclarations";
import TimelineSkeleton from "./skeletons/TimelineSkeleton";

const ProductTimeline = () => {
  const [data, setData] = useState<AuditType[]>([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const item = location.state.item;

  const getAudits = async () => {
    try {
      setLoading(true);
      const audits = await getAuditTrail(item.id);
      setData(audits ?? []);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAudits();
  }, []);

  return (
    <div className="space-y-4">
      {loading ? (
        [0, 1, 2].map((i) => <TimelineSkeleton key={i} />)
      ) : (
        <>
          {data.reverse().map((item) => (
            <div key={item.timestamp} className="flex gap-x-3">
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 ">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-gray-400 "></div>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8">
                <h3 className="text-xs uppercase text-gray-500">
                  {item.timestamp}
                </h3>
                <h3 className="flex gap-x-1.5 font-semibold text-gray-800 ">
                  {item.remarks}
                </h3>
                <p className="mt-1 text-sm text-gray-600 -400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, dolorum.
                </p>
                <button
                  type="button"
                  className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                >
                  <LuUser
                    size={18}
                    className="bg-gray-200 text-gray-900 rounded-full p-0.5"
                  />
                  {item.user.slice(0, 20)}...
                  <GoArrowUpRight />
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default ProductTimeline;
