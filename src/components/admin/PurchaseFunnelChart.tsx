
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowRight } from "lucide-react";

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
  const finalConversionRate =
    totalSessions > 0
      ? ((finalValue / totalSessions) * 100).toFixed(1)
      : "0.0";

  const dropOffSuggestions = [
    {
      title: "Reduce Configurator Churn",
      levers: "Try showing dynamic price earlier or saving draft carts.",
    },
    {
      title: "Improve Checkout Conversion",
      levers: "Offer express payment options like Apple/Google Pay and auto-fill addresses.",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap justify-between items-start gap-4">
          <div>
            <CardTitle>Upload → Purchase Funnel</CardTitle>
            <CardDescription>Drop-off between key user actions</CardDescription>
          </div>
          <div className="flex gap-6 text-right">
            <div>
              <div className="text-sm text-muted-foreground">SESSIONS</div>
              <div className="text-2xl font-bold">
                {totalSessions.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">
                CONVERSION RATE
              </div>
              <div className="text-2xl font-bold">{finalConversionRate}%</div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex items-start gap-4 overflow-x-auto p-6">
          {funnelData.map((item, index) => {
            const isLastStep = index === funnelData.length - 1;
            const progressValue =
              totalSessions > 0 ? (item.value / totalSessions) * 100 : 0;
            const previousValue = index > 0 ? funnelData[index - 1].value : null;

            return (
              <React.Fragment key={item.step}>
                <div className="flex flex-col w-64 flex-shrink-0">
                  <div className="text-sm font-medium text-muted-foreground">
                    STEP {index + 1}
                  </div>
                  <div className="text-lg font-semibold">{item.step}</div>
                  <div className="text-3xl font-bold mt-2">
                    {item.value.toLocaleString()}
                  </div>
                  {previousValue && (
                    <div className="text-sm text-muted-foreground">
                      {((item.value / previousValue) * 100).toFixed(1)}% of
                      previous
                    </div>
                  )}
                  <Progress value={progressValue} className="mt-4 h-2" />
                </div>

                {!isLastStep && (
                  <div className="flex flex-col items-center pt-8 w-48 flex-shrink-0 text-center">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    <div className="text-destructive font-bold text-lg mt-1">
                      {calculateDropOff(funnelData[index + 1].value, item.value)}%
                    </div>
                    <div className="text-xs text-muted-foreground uppercase font-semibold">
                      Drop-off
                    </div>
                    <div className="text-xs text-muted-foreground">
                      (
                      {(
                        item.value - funnelData[index + 1].value
                      ).toLocaleString()}
                      )
                    </div>
                    {dropOffSuggestions[index] && (
                      <div className="mt-4 text-xs text-muted-foreground border-t border-dashed pt-4 w-full">
                        <div className="font-bold text-foreground">
                          {dropOffSuggestions[index].title}
                        </div>
                        <p className="mt-1">
                          {dropOffSuggestions[index].levers}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
