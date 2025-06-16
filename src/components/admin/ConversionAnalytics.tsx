
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
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const conversionData = [
  { source: 'Organic', visits: 4500, conversions: 180, rate: 4.0 },
  { source: 'Paid Search', visits: 2800, conversions: 168, rate: 6.0 },
  { source: 'Social', visits: 3200, conversions: 96, rate: 3.0 },
  { source: 'Email', visits: 1500, conversions: 120, rate: 8.0 },
  { source: 'Direct', visits: 2000, conversions: 100, rate: 5.0 },
];

export function ConversionAnalytics() {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle>Conversion by Source</CardTitle>
        <CardDescription>
          Conversion rates across different traffic sources
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={conversionData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="source"
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
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--background))",
                borderColor: "hsl(var(--border))",
                borderRadius: "0.5rem",
                fontSize: "0.75rem",
              }}
              formatter={(value: number, name: string) => [
                name === 'rate' ? `${value}%` : value,
                name === 'rate' ? 'Conversion Rate' : name
              ]}
            />
            <Bar dataKey="rate" fill="#8884d8" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
