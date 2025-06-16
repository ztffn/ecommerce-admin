
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const customerSegmentData = [
  { name: 'New Customers', value: 35, color: '#8884d8' },
  { name: 'Returning', value: 45, color: '#82ca9d' },
  { name: 'VIP', value: 20, color: '#ffc658' },
];

const retentionData = [
  { cohort: 'Jan 2024', month1: 100, month2: 75, month3: 60, month4: 50, month5: 45, month6: 40 },
  { cohort: 'Feb 2024', month1: 100, month2: 78, month3: 63, month4: 52, month5: 47 },
  { cohort: 'Mar 2024', month1: 100, month2: 80, month3: 65, month4: 55 },
  { cohort: 'Apr 2024', month1: 100, month2: 82, month3: 67 },
  { cohort: 'May 2024', month1: 100, month2: 85 },
  { cohort: 'Jun 2024', month1: 100 },
];

export function CustomerAnalytics() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle>Customer Segments</CardTitle>
          <CardDescription>
            Distribution of customer types
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={customerSegmentData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {customerSegmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  borderColor: "hsl(var(--border))",
                  borderRadius: "0.5rem",
                  fontSize: "0.75rem",
                }}
                formatter={(value: number) => [`${value}%`, "Percentage"]}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle>Customer Retention</CardTitle>
          <CardDescription>
            Monthly retention rates by cohort
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={retentionData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="cohort"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                angle={-45}
                textAnchor="end"
                height={60}
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
                formatter={(value: number) => [`${value}%`, "Retention"]}
              />
              <Bar dataKey="month3" fill="#8884d8" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
