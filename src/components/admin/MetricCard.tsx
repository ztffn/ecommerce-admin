
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type MetricCardProps = {
  title: string;
  value: string;
  description: string;
  trend: {
    value: string;
    isPositive: boolean;
    description: string;
  };
  icon: LucideIcon;
};

export function MetricCard({ title, value, description, trend, icon: Icon }: MetricCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center space-x-2 mt-2">
          <Badge 
            variant={trend.isPositive ? "default" : "secondary"}
            className={cn(
              "text-xs",
              trend.isPositive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            )}
          >
            {trend.isPositive ? "↗" : "↘"} {trend.value}
          </Badge>
          <p className="text-xs text-muted-foreground">{trend.description}</p>
        </div>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
      </CardContent>
    </Card>
  );
}
