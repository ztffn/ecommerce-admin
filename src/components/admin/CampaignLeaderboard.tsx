
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { campaigns } from "@/data/roasData";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
};

export function CampaignLeaderboard() {
  const sortedCampaigns = [...campaigns].sort((a, b) => b.roas - a.roas);

  return (
    <Card className="rounded-2xl shadow-sm col-span-12 md:col-span-4">
      <CardHeader>
        <CardTitle>Campaign Leaderboard</CardTitle>
        <CardDescription>
          Which campaigns make money vs. drain cash?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Campaign</TableHead>
              <TableHead className="text-right">ROAS</TableHead>
              <TableHead className="text-right">Spend</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedCampaigns.map((campaign) => (
              <TableRow key={campaign.id} className="cursor-pointer hover:bg-muted/50">
                <TableCell className="font-medium text-xs py-2">
                    <div>{campaign.name}</div>
                    <Badge variant="outline" className="mt-1 font-normal">{campaign.source}</Badge>
                </TableCell>
                <TableCell
                  className={cn(
                    "text-right font-semibold text-xs py-2",
                    campaign.roas < 1 ? "text-destructive" : "text-green-600"
                  )}
                >
                  {campaign.roas.toFixed(2)}x
                </TableCell>
                <TableCell className="text-right text-xs py-2">{formatCurrency(campaign.spend)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
