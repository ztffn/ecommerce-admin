
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

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
        <div className="h-full w-full flex items-center justify-center text-muted-foreground">
          <p>Scatter plot coming soon.</p>
        </div>
      </CardContent>
    </Card>
  );
}
