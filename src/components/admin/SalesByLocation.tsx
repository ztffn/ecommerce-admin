
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const salesData = [
  { country: 'Canada', percentage: 85, change: '+5.2%', changeType: 'increase' },
  { country: 'Greenland', percentage: 80, change: '+7.8%', changeType: 'increase' },
  { country: 'Russia', percentage: 63, change: '-2.1%', changeType: 'decrease' },
  { country: 'China', percentage: 60, change: '+3.4%', changeType: 'increase' },
  { country: 'Australia', percentage: 45, change: '+1.2%', changeType: 'increase' },
  { country: 'Greece', percentage: 40, change: '+1%', changeType: 'increase' },
];

const colors = [
    '#0ea5e9',
    '#6366f1',
    '#f97316',
    '#22c55e',
    '#ec4899',
    '#facc15',
];

export function SalesByLocation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales by Location</CardTitle>
        <CardDescription>Your top selling countries.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={salesData}
              layout="vertical"
              margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
            >
              <XAxis type="number" hide />
              <YAxis
                type="category"
                dataKey="country"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                width={80}
              />
              <Tooltip
                cursor={{ fill: "hsl(var(--muted))" }}
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  borderColor: "hsl(var(--border))",
                }}
                formatter={(value: number) => [`${value}%`, 'Sales']}
                labelStyle={{display: "none"}}
              />
              <Bar dataKey="percentage" radius={[0, 4, 4, 0]}>
                {salesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
