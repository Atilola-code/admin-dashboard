import CustomerMapChart from "./components/CustomerMapChart";
import CustomerReview from "./components/CustomerReview";
import Dashboard from "./components/Dashboard";
import MetricCard from "./components/MetricCard";
import OrderChart from "./components/OrderChart";
import PieChartCard from "./components/PieChartCard";
import RevenueChart from "./components/RevenueChart";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen bg-[#F3F2F7]">
          <SideBar />

          <div className="flex-1 flex flex-col overflow-x-hidden min-h-screen">
            <SearchBar />
            <Dashboard />
            <MetricCard />

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mx-4 md:mx-4 mt-6">
  <div className="col-span-3 flex flex-col md:flex-row gap-6">
    <PieChartCard />
    <OrderChart />
  </div>

  <div className="col-span-3 flex flex-col md:flex-row gap-6">
    <div className="w-full md:w-2/3">
      <RevenueChart />
    </div>
    <div className="w-full md:w-1/3">
      <CustomerMapChart />
    </div>
  </div>
</div>


            <CustomerReview />

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}


