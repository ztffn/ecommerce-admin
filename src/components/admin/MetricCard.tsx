
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
  children?: React.ReactNode;
};

export function MetricCard({ title, value, description, trend, icon: Icon, children }: MetricCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <Icon className="h-4 w-4 text-muted-foreground" />
          {title}
        </CardTitle>
        <Badge 
          variant="secondary"
          className={cn(
            "text-xs font-medium",
            trend.isPositive 
              ? "bg-green-50 text-green-700 border-green-200" 
              : "bg-red-50 text-red-700 border-red-200"
          )}
        >
          {trend.isPositive ? "↗" : "↘"} {trend.value}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
        <p className="text-xs text-muted-foreground">{trend.description}</p>
        {children}
      </CardContent>
    </Card>
  );
}
