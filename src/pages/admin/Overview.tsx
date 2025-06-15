
import { CongratulationsCard } from "@/components/admin/CongratulationsCard";
import { KpiCard } from "@/components/admin/KpiCard";
import { OverviewChart } from "@/components/admin/OverviewChart";
import { RecentOrders } from "@/components/admin/RecentOrders";
import { PurchaseFunnelChart } from "@/components/admin/PurchaseFunnelChart";
import { DollarSign, Users, CreditCard } from "lucide-react";

export default function AdminOverview() {
  return (
    <>
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
      <div className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
            <OverviewChart />
        </div>
        <div className="space-y-4 md:space-y-8">
            <RecentOrders />
            <PurchaseFunnelChart />
        </div>
      </div>
    </>
  );
}
