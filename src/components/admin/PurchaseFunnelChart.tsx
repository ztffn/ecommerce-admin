
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ArrowDown } from "lucide-react";

const funnelData = [
  { step: "Photo Uploaded", value: 1200 },
  { step: "Added to Cart", value: 800 },
  { step: "Order Completed", value: 450 },
];

function calculateDropOff(current: number, previous: number) {
    if (previous === 0) return 0;
    return (((previous - current) / previous) * 100).toFixed(1);
}

export function PurchaseFunnelChart() {
  const initialValue = funnelData[0]?.value || 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload → Purchase Funnel</CardTitle>
        <CardDescription>
          Drop-off between key user actions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {funnelData.map((item, index) => {
            const previousValue = index > 0 ? funnelData[index-1].value : item.value;
            const dropOff = index > 0 ? calculateDropOff(item.value, previousValue) : null;
            const conversion = initialValue > 0 ? (item.value / initialValue) * 100 : 0;

            return (
                <div key={item.step}>
                <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">{item.step}</span>
                    <span className="text-sm text-muted-foreground">{item.value.toLocaleString()} users</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                    <div
                    className="bg-primary h-3 rounded-full"
                    style={{ width: `${conversion}%` }}
                    />
                </div>
                {dropOff !== null && (
                    <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <ArrowDown className="h-3 w-3 mr-1 text-destructive" />
                    <span>{dropOff}% drop-off from previous step</span>
                    </div>
                )}
                </div>
            );
        })}
        </div>
      </CardContent>
    </Card>
  );
}
