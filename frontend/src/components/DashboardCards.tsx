import { IconType } from "react-icons";
import { BsArrowUpRightCircle } from "react-icons/bs";

interface DashboardCardsProps {
  title: string;
  status: string;
  Icon: IconType;
  href: string;
}

const DashboardCards = ({ title, status, Icon, href }: DashboardCardsProps) => {
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl">
      <div className="p-4 md:p-5 flex justify-between gap-x-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500">
            {title}
          </p>
          <div className="mt-1 flex items-center gap-x-2">
            <h3 className="text-xl sm:text-2xl font-medium text-gray-800">
              {status}
            </h3>
          </div>
        </div>
        <div className="shrink-0 flex justify-center items-center size-[46px] bg-gray-100 text-gray-950 rounded-full">
          <Icon className="shrink-0" size={24} />
        </div>
      </div>

      <a
        className="py-3 px-4 md:px-5 inline-flex justify-between items-center text-sm text-gray-600 border-t border-gray-200 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-b-xl"
        href={href}
      >
        View details
        <BsArrowUpRightCircle className="shrink-0" size={20} />
      </a>
    </div>
  );
};

export default DashboardCards;
