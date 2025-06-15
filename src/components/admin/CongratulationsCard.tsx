
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CongratulationsCard() {
  return (
    <Card className="relative">
      <CardHeader>
        <CardTitle>Congratulations Toby! 🎉</CardTitle>
        <CardDescription>Best seller of the month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold">$15,231.89</div>
        <p className="text-xs text-muted-foreground mt-1">+65% from last month</p>
        <Button size="sm" className="mt-4">
          View Sales
        </Button>
      </CardContent>
    </Card>
  );
}
