
import { KpiCard } from "@/components/admin/KpiCard";
import { OverviewChart } from "@/components/admin/OverviewChart";
import { RecentOrders } from "@/components/admin/RecentOrders";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";

export default function AdminOverview() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
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
        <KpiCard
          title="Active Now"
          amount="+573"
          description="+201 since last hour"
          icon={Activity}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <div className="xl:col-span-2">
            <OverviewChart />
        </div>
        <RecentOrders />
      </div>
    </>
  );
}
