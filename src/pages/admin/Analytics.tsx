
import { TrafficAnalytics } from "@/components/admin/TrafficAnalytics";
import { ConversionAnalytics } from "@/components/admin/ConversionAnalytics";
import { RevenueAnalytics } from "@/components/admin/RevenueAnalytics";
import { CustomerAnalytics } from "@/components/admin/CustomerAnalytics";

export default function AdminAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">
          Deep-dive analysis and comprehensive reporting
        </p>
      </div>
      
      <div className="grid gap-6">
        <TrafficAnalytics />
        <div className="grid gap-6 lg:grid-cols-2">
          <ConversionAnalytics />
          <RevenueAnalytics />
        </div>
        <CustomerAnalytics />
      </div>
    </div>
  );
}
