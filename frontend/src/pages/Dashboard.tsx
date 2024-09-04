import DashboardCards from "../components/DashboardCards";
import Layout from "../components/Layout";
import { dashboardCardsData } from "../utils/constants";

const Dashboard = () => {
  return (
    <Layout>
      {/* Header Section */}
      <header className="text-gray-900 py-2 px-8 mb-6 ">
        <h1 className="text-3xl font-semibold tracking-wide">Dashboard</h1>
        <p className="mt-2 text-sm text-gray-500 border-b pb-2">
          Welcome back! Here’s what’s happening with your account today.
        </p>
      </header>
      <section className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 rounded-lg">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardCardsData.map((item) => (
            <DashboardCards
              Icon={item.Icon}
              title={item.title}
              status={item.status}
              href={item.href}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
