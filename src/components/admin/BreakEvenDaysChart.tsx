
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
  Label,
} from "recharts";
import { campaigns } from "@/data/roasData";

const chartData = campaigns.filter(c => c.breakEvenDays !== undefined).sort((a,b) => (a.breakEvenDays ?? 0) - (b.breakEvenDays ?? 0));

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 text-xs bg-background border rounded-lg shadow-sm">
        <p className="font-bold">{label}</p>
        <p>Broke even in: <span className="font-semibold">{payload[0].value} days</span></p>
      </div>
    );
  }
  return null;
};


export function BreakEvenDaysChart() {
  return (
    <Card className="rounded-2xl shadow-sm col-span-12 md:col-span-6">
      <CardHeader>
        <CardTitle>Break-even Days</CardTitle>
        <CardDescription>
          How long did campaigns take to reach ROAS ≥ 1?
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={chartData}
            margin={{ top: 20, right: 30, bottom: 40, left: 10 }}
            layout="vertical"
            >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" stroke="#888888" fontSize={12}>
                <Label value="Days to Break Even" offset={-15} position="insideBottom" fill="#888888" fontSize={12} />
            </XAxis>
            <YAxis 
                type="category" 
                dataKey="name" 
                width={120} 
                tick={{fontSize: 12, fill: '#888888'}} 
                tickLine={false} 
                axisLine={false}
            />
            <Tooltip cursor={{fill: 'hsl(var(--muted))'}} content={<CustomTooltip />} />
            <Bar dataKey="breakEvenDays" fill="#82ca9d" radius={[0, 4, 4, 0]} barSize={16}/>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
