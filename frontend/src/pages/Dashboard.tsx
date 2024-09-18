import { useEffect, useState } from "react";
import DashboardCards from "../components/DashboardCards";
import DashboardTable from "../components/DashboardTable";
import Layout from "../components/Layout";
import { getItems } from "../contract/manageProduct";
import { dashboardCardsData, ItemNumberTypes } from "../utils/constants";
import { getNumbersofItems } from "../utils/libs";
import SkeletonCard from "../components/skeletons/SkeletonCard";
import { ItemType } from "../utils/TypeDeclarations";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [itemsNumber, setItemsNumber] = useState<Partial<ItemNumberTypes>>({});
  const [items, setItems] = useState<ItemType[]>([]);

  const handleGetItems = async () => {
    try {
      setLoading(true);
      const allItems = await getItems();
      setItems(allItems);
      const numbersofItems = getNumbersofItems(allItems);
      setItemsNumber(numbersofItems);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetItems();
  }, []);
  return (
    <Layout>
      <header className="text-gray-900 py-4  sm:px-6 lg:px-8 mb-6">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-wide">
          Dashboard
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-gray-500 border-b pb-2">
          Welcome back! Here’s what’s happening with your account today.
        </p>
      </header>

      <section className="max-w-[85rem] mx-auto sm:px-6 lg:px-8 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {loading ? (
            <>
              {[0, 1, 2, 3].map((i) => (
                <SkeletonCard key={i} />
              ))}
            </>
          ) : (
            <>
              {dashboardCardsData.map((item, idx) => (
                <DashboardCards
                  key={idx}
                  Icon={item.Icon}
                  title={item.title}
                  status={
                    item.status in itemsNumber
                      ? String(
                          itemsNumber[item.status as keyof ItemNumberTypes] || 0
                        )
                      : "0"
                  }
                  href={item.href}
                />
              ))}
            </>
          )}
        </div>
      </section>

      <div className="text-gray-900 py-4 sm:px-6 lg:px-8 my-6">
        <h1 className="text-lg sm:text-xl font-semibold tracking-wide">
          Recent activities
        </h1>
        <p className="mt-2 text-xs sm:text-sm text-gray-500 border-b pb-2">
          Explore recent activities in your scope.
        </p>
      </div>

      <div className="max-w-[80rem] mx-auto px-4 lg:px-4">
        <DashboardTable items={items} loading={loading} />
      </div>
    </Layout>
  );
};

export default Dashboard;
