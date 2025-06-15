
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import { campaigns } from "@/data/roasData";

const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="p-2 text-xs bg-background border rounded-lg shadow-sm">
        <p className="font-bold">{data.name}</p>
        <p>Spend: {formatCurrency(data.spend)}</p>
        <p>Revenue: {formatCurrency(data.revenue)}</p>
        <p>Clicks: {data.clicks}</p>
        <p>ROAS: {data.roas.toFixed(2)}x</p>
      </div>
    );
  }
  return null;
};


export function CostRevenueScatter() {
  return (
    <Card className="rounded-2xl shadow-sm col-span-12 md:col-span-6">
      <CardHeader>
        <CardTitle>Cost vs. Revenue</CardTitle>
        <CardDescription>
          Does more spend lead to more revenue?
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              type="number"
              dataKey="spend"
              name="Spend"
              tickFormatter={(value) => formatCurrency(value)}
              stroke="#888888"
              fontSize={12}
            >
              <Label value="Spend" offset={-15} position="insideBottom" fill="#888888" fontSize={12}/>
            </XAxis>
            <YAxis
              type="number"
              dataKey="revenue"
              name="Revenue"
              tickFormatter={(value) => formatCurrency(value)}
              stroke="#888888"
              fontSize={12}
            >
                <Label value="Revenue" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} fill="#888888" fontSize={12}/>
            </YAxis>
            <ZAxis type="number" dataKey="clicks" range={[60, 400]} name="Clicks" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
            <Scatter name="Campaigns" data={campaigns} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
