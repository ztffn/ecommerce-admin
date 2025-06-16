
import { RoasTrendChart } from "@/components/admin/RoasTrendChart";
import { CampaignLeaderboard } from "@/components/admin/CampaignLeaderboard";
import { CostRevenueScatter } from "@/components/admin/CostRevenueScatter";
import { BreakEvenDaysChart } from "@/components/admin/BreakEvenDaysChart";

export default function AdminRoas() {
    return (
        <div className="grid gap-6 lg:grid-cols-12">
            <RoasTrendChart />
            <CampaignLeaderboard />
            <CostRevenueScatter />
            <BreakEvenDaysChart />
        </div>
    );
}
