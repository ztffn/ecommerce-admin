
import { CongratulationsCard } from "@/components/admin/CongratulationsCard";
import { OverviewChart } from "@/components/admin/OverviewChart";
import { RecentOrders } from "@/components/admin/RecentOrders";
import { DollarSign, Users, CreditCard, TrendingUp } from "lucide-react";
import { SalesByLocation } from "@/components/admin/SalesByLocation";
import { StoreVisitsBySource } from "@/components/admin/StoreVisitsBySource";
import { CustomerReviews } from "@/components/admin/CustomerReviews";
import { BestSellingProducts } from "@/components/admin/BestSellingProducts";
import { MetricCard } from "@/components/admin/MetricCard";
import { TimePeriodSelector } from "@/components/admin/TimePeriodSelector";
import { useState } from "react";

const timePeriods = [
  { value: "7d", label: "Last 7 days" },
  { value: "30d", label: "Last 30 days" },
  { value: "3m", label: "Last 3 months" }
];

export default function AdminOverview() {
  const [selectedPeriod, setSelectedPeriod] = useState("30d");

  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <CongratulationsCard />
        <MetricCard
          title="Total Revenue"
          value="$125,231"
          description="Trending up this month"
          trend={{
            value: "+12.5%",
            isPositive: true,
            description: "from last month"
          }}
          icon={DollarSign}
        />
        <MetricCard
          title="New Customers"
          value="3,602"
          description="Acquisition needs attention"
          trend={{
            value: "-2%",
            isPositive: false,
            description: "from last month"
          }}
          icon={Users}
        />
        <MetricCard
          title="Active Orders"
          value="2,341"
          description="Strong order flow"
          trend={{
            value: "+15.3%",
            isPositive: true,
            description: "from last month"
          }}
          icon={CreditCard}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Revenue Overview</h3>
              <p className="text-sm text-muted-foreground">Total revenue over time</p>
            </div>
            <TimePeriodSelector 
              value={selectedPeriod}
              onValueChange={setSelectedPeriod}
              periods={timePeriods}
            />
          </div>
          <OverviewChart />
        </div>
        <MetricCard
          title="Growth Rate"
          value="4.5%"
          description="Steady performance increase"
          trend={{
            value: "+2.1%",
            isPositive: true,
            description: "vs last period"
          }}
          icon={TrendingUp}
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
