
import { CongratulationsCard } from "@/components/admin/CongratulationsCard";
import { OverviewChart } from "@/components/admin/OverviewChart";
import { RecentOrders } from "@/components/admin/RecentOrders";
import { DollarSign, Users, CreditCard, TrendingUp } from "lucide-react";
import { SalesByLocation } from "@/components/admin/SalesByLocation";
import { StoreVisitsBySource } from "@/components/admin/StoreVisitsBySource";
import { CustomerReviews } from "@/components/admin/CustomerReviews";
import { BestSellingProducts } from "@/components/admin/BestSellingProducts";
import { TrendCard } from "@/components/admin/TrendCard";

// Generate dummy data for trend charts
const generateTrendData = () => {
  return Array.from({ length: 10 }, (_, i) => ({
    name: `Point ${i + 1}`,
    value: Math.floor(Math.random() * 100) + 10,
  }));
};

const revenueData = generateTrendData();
const salesData = generateTrendData();
const customersData = generateTrendData();

const returningRateData = [
  { name: "Jan", value: 86.5 },
  { name: "Feb", value: 88.2 },
  { name: "Mar", value: 87.0 },
  { name: "Apr", value: 89.1 },
  { name: "May", value: 87.8 },
  { name: "Jun", value: 88.5 },
  { name: "Jul", value: 90.1 },
  { name: "Aug", value: 89.7 },
  { name: "Sep", value: 87.5 },
  { name: "Oct", value: 88.9 },
];


export default function AdminOverview() {
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <CongratulationsCard />
        <TrendCard
          title="Revenue"
          amount="$125,231"
          description="+20.1% from last month"
          icon={DollarSign}
          data={revenueData}
        />
        <TrendCard
          title="Sales"
          amount="20K"
          description="-1.7% from last month"
          icon={CreditCard}
          data={salesData}
        />
        <TrendCard
          title="New Customers"
          amount="3,602"
          description="+36.5% from last month"
          icon={Users}
          data={customersData}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
        <div className="lg:col-span-2">
            <OverviewChart />
        </div>
        <TrendCard
          title="Returning Rate"
          amount="87.5%"
          description="+2.5% from last month"
          icon={TrendingUp}
          data={returningRateData}
          showXAxis={true}
          showYAxis={true}
          yAxisFormatter={(value) => `${value}%`}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
        <SalesByLocation />
        <StoreVisitsBySource />
        <CustomerReviews />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
        <RecentOrders />
        <BestSellingProducts />
      </div>
    </div>
  );
}
