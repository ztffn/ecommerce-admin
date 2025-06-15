
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ArrowDown, CheckCircle2 } from "lucide-react";

const funnelData = [
  { step: "Photo Uploaded", value: 1200 },
  { step: "Added to Cart", value: 800 },
  { step: "Order Completed", value: 450 },
];

function calculateDropOff(current: number, previous: number) {
    if (previous === 0) return "0.0";
    return (((previous - current) / previous) * 100).toFixed(1);
}

export function PurchaseFunnelChart() {
  const totalSessions = funnelData[0]?.value || 0;
  const finalValue = funnelData[funnelData.length - 1]?.value || 0;
  const finalConversionRate = totalSessions > 0 ? ((finalValue / totalSessions) * 100).toFixed(1) : "0.0";

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap justify-between items-start gap-4">
          <div>
            <CardTitle>Upload → Purchase Funnel</CardTitle>
            <CardDescription>
              Drop-off between key user actions
            </CardDescription>
          </div>
          <div className="flex gap-6 text-right">
            <div>
              <div className="text-sm text-muted-foreground">SESSIONS</div>
              <div className="text-2xl font-bold">{totalSessions.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">CONVERSION RATE</div>
              <div className="text-2xl font-bold">{finalConversionRate}%</div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
          {funnelData.map((item, index) => {
            const previousValue = index > 0 ? funnelData[index - 1].value : null;
            const conversionFromPrevious = previousValue ? ((item.value / previousValue) * 100).toFixed(1) : null;
            
            const nextValue = index < funnelData.length - 1 ? funnelData[index + 1].value : null;
            const dropOffPercentage = nextValue !== null ? calculateDropOff(nextValue, item.value) : null;
            const dropOffCount = nextValue !== null ? item.value - nextValue : null;

            return (
              <div key={item.step} className="flex flex-col border-t pt-4 md:border-t-0 md:pt-0 md:border-l md:pl-8 first:border-l-0 first:pl-0">
                <div>
                  <div className="text-sm text-muted-foreground uppercase">Step {index + 1}</div>
                  <div className="text-lg font-semibold">{item.step}</div>
                </div>
                
                <div className="mt-4">
                  <div className="text-3xl font-bold">{item.value.toLocaleString()}</div>
                  {conversionFromPrevious !== null && (
                    <div className="text-sm text-muted-foreground">{conversionFromPrevious}% of previous step</div>
                  )}
                </div>

                <div className="mt-8 flex-grow flex flex-col justify-end">
                  {dropOffPercentage !== null && dropOffCount !== null && (
                    <div>
                      <div className="flex items-center text-destructive">
                        <ArrowDown className="h-4 w-4 mr-1" />
                        <span className="font-bold text-xs uppercase">Dropoff</span>
                      </div>
                      <div className="text-2xl font-bold text-destructive">{dropOffPercentage}%</div>
                      <div className="text-sm text-muted-foreground">({dropOffCount.toLocaleString()})</div>
                    </div>
                  )}

                  {index === funnelData.length - 1 && (
                    <div>
                      <div className="flex items-center text-green-600">
                        <CheckCircle2 className="h-4 w-4 mr-1" />
                        <span className="font-bold text-xs uppercase">Total Conversion</span>
                      </div>
                      <div className="text-2xl font-bold text-green-600">{finalConversionRate}%</div>
                      <div className="text-sm text-muted-foreground">({item.value.toLocaleString()})</div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
