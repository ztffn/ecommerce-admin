
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

type TrendCardProps = {
  title: string;
  amount: string;
  description: string;
  icon: LucideIcon;
  data: { name: string; value: number }[];
  showXAxis?: boolean;
  showYAxis?: boolean;
  yAxisFormatter?: (value: any) => string;
};

export function TrendCard({ title, amount, description, icon: Icon, data, showXAxis = false, showYAxis = false, yAxisFormatter }: TrendCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <div>
          <div className="text-2xl font-bold">{amount}</div>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
        <div className="mt-4 flex-grow">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: -10,
                bottom: showXAxis ? 10 : 0,
              }}
            >
              <Tooltip
                cursor={false}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-1 gap-1.5">
                          <span className="text-sm font-bold">{yAxisFormatter ? yAxisFormatter(payload[0].value) : payload[0].value}</span>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              {showXAxis && (
                <XAxis
                  dataKey="name"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
              )}
              {showYAxis && (
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={yAxisFormatter}
                  width={35}
                />
              )}
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.2}
                strokeWidth={2}
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
