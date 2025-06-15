
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { dailyRoas } from "@/data/roasData";

const chartData = dailyRoas;

export function RoasTrendChart() {
  return (
    <Card className="rounded-2xl shadow-sm col-span-12 md:col-span-8">
      <CardHeader className="flex-row items-center justify-between">
        <div>
          <CardTitle>Daily ROAS Trend</CardTitle>
          <CardDescription>
            Is spend on platforms still paying off?
          </CardDescription>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              Last 30 days
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Last 7 days</DropdownMenuItem>
            <DropdownMenuItem>Last 30 days</DropdownMenuItem>
            <DropdownMenuItem>Last 90 days</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="date"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}x`}
            />
            <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  borderColor: "hsl(var(--border))",
                  borderRadius: "0.5rem",
                  fontSize: "0.75rem",
                  boxShadow: "hsl(var(--shadow))",
                }}
                formatter={(value: number) => [`${value.toFixed(2)}x ROAS`, null]}
                labelStyle={{ fontWeight: "bold" }}
            />
            <Legend wrapperStyle={{ fontSize: "0.875rem", paddingTop: "20px" }} />
            <Line type="monotone" dataKey="Facebook" stroke="#4267B2" strokeWidth={2} dot={false} activeDot={{ r: 6 }}/>
            <Line type="monotone" dataKey="Instagram" stroke="#E1306C" strokeWidth={2} dot={false} activeDot={{ r: 6 }}/>
            <Line type="monotone" dataKey="TikTok" stroke="#00f2ea" strokeWidth={2} dot={false} activeDot={{ r: 6 }}/>
            <Line type="monotone" dataKey="Google" stroke="#FBBC05" strokeWidth={2} dot={false} activeDot={{ r: 6 }}/>
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
