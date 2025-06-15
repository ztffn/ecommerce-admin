
import { KpiCard } from "@/components/admin/KpiCard";
import { OverviewChart } from "@/components/admin/OverviewChart";
import { RecentSales } from "@/components/admin/RecentSales";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";

export default function AdminOverview() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <KpiCard
          title="Total Revenue"
          amount="$45,231.89"
          description="+20.1% from last month"
          icon={DollarSign}
        />
        <KpiCard
          title="Subscriptions"
          amount="+2350"
          description="+180.1% from last month"
          icon={Users}
        />
        <KpiCard
          title="Sales"
          amount="+12,234"
          description="+19% from last month"
          icon={CreditCard}
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
        <RecentSales />
      </div>
    </>
  );
}
