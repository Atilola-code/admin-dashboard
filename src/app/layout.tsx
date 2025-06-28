import CustomerMapChart from "./components/CustomerMapChart";
import CustomerReview from "./components/CustomerReview";
import Dashboard from "./components/Dashboard";
import MetricCard from "./components/MetricCard";
import OrderChart from "./components/OrderChart";
import PieChartCard from "./components/PieChartCard";
import RevenueChart from "./components/RevenueChart";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";
import font, { Poppins } from "next/font/google";
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
          {/* Sidebar */}
            <SideBar/>


          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-x-hidden">
            <SearchBar/>
            <Dashboard/>
            <MetricCard/>

            {/* Chart section */}
            <div className="flex  lg:flex-nowrap gap-6 mx-8 mt-6">
            <PieChartCard/>
            <OrderChart/>
            </div>

            <div className="flex gap-6 mx-8 mt-6">
  {/* Total Revenue chart - 60% width */}
  <div className="w-full md:w-[60%]">
    <RevenueChart />
  </div>

  {/* Customer Map chart - 40% width */}
  <div className="w-full md:w-[40%]">
    <CustomerMapChart />
  </div>
</div>

    {/* Customers review */}
      <CustomerReview/>


        {children}
          </div>
        </div>
      </body>
    </html>
  );
}

