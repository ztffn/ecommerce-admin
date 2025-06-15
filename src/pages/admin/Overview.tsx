
import { CongratulationsCard } from "@/components/admin/CongratulationsCard";
import { KpiCard } from "@/components/admin/KpiCard";
import { OverviewChart } from "@/components/admin/OverviewChart";
import { RecentOrders } from "@/components/admin/RecentOrders";
import { DollarSign, Users, CreditCard, TrendingUp } from "lucide-react";
import { SalesByLocation } from "@/components/admin/SalesByLocation";
import { StoreVisitsBySource } from "@/components/admin/StoreVisitsBySource";
import { CustomerReviews } from "@/components/admin/CustomerReviews";
import { BestSellingProducts } from "@/components/admin/BestSellingProducts";

export default function AdminOverview() {
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <CongratulationsCard />
        <KpiCard
          title="Revenue"
          amount="$125,231"
          description="+20.1% from last month"
          icon={DollarSign}
        />
        <KpiCard
          title="Sales"
          amount="20K"
          description="-1.7% from last month"
          icon={CreditCard}
        />
        <KpiCard
          title="New Customers"
          amount="3,602"
          description="+36.5% from last month"
          icon={Users}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
        <div className="lg:col-span-2">
            <OverviewChart />
        </div>
        <KpiCard
          title="Returning Rate"
          amount="$42,379"
          description="+2.5% from last month"
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
