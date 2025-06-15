
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: 'Direct', value: 400 },
  { name: 'Social', value: 300 },
  { name: 'Email', value: 300 },
  { name: 'Referrals', value: 200 },
  { name: 'Other', value: 100 },
];
const COLORS = ['hsl(var(--primary))', '#6366f1', '#f97316', '#22c55e', 'hsl(var(--muted-foreground))'];

export function StoreVisitsBySource() {
  const totalVisitors = data.reduce((acc, entry) => acc + entry.value, 0);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Store Visits by Source</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                stroke="hsl(var(--background))"
                strokeWidth={2}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                cursor={{ fill: 'hsl(var(--muted))' }}
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  borderColor: "hsl(var(--border))",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-2xl font-bold">
                {(totalVisitors / 1000).toFixed(1)}K
            </span>
            <span className="text-sm text-muted-foreground">Visitors</span>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-4 text-xs">
          {data.map((entry, index) => (
            <div key={entry.name} className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
              <span>{entry.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
