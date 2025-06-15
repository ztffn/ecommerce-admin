
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

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
        <div className="h-full w-full flex items-center justify-center text-muted-foreground">
            <p>Bar chart coming soon.</p>
        </div>
      </CardContent>
    </Card>
  );
}
