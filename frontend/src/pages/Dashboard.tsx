import DashboardCards from "../components/DashboardCards";
import DashboardTable from "../components/DashboardTable";
import Layout from "../components/Layout";
import { dashboardCardsData } from "../utils/constants";

const Dashboard = () => {
  return (
    <Layout>
      {/* Header Section */}
      <header className="text-gray-900 py-4  sm:px-6 lg:px-8 mb-6">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-wide">
          Dashboard
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-gray-500 border-b pb-2">
          Welcome back! Here’s what’s happening with your account today.
        </p>
      </header>

      {/* Cards */}
      <section className="max-w-[85rem] mx-auto sm:px-6 lg:px-8 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {dashboardCardsData.map((item, idx) => (
            <DashboardCards
              key={idx}
              Icon={item.Icon}
              title={item.title}
              status={item.status}
              href={item.href}
            />
          ))}
        </div>
      </section>

      {/* Recent Activities Title */}
      <div className="text-gray-900 py-4 sm:px-6 lg:px-8 my-6">
        <h1 className="text-lg sm:text-xl font-semibold tracking-wide">
          Recent activities
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-gray-500 border-b pb-2">
          Explore recent activities in your scope.
        </p>
      </div>

      {/* Table */}
      <div className="mx-auto sm:px-6 lg:px-8">
        <DashboardTable />
      </div>
    </Layout>
  );
};

export default Dashboard;
