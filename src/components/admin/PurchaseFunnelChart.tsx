
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ArrowDown, Check, Users, BarChart } from "lucide-react";
import { StepDetails } from "./StepDetails";

type FunnelStep = {
    step: string;
    value: number;
    microSteps: {
        id: string;
        description: string;
        status: 'Completed' | 'Failed';
        value: number;
    }[];
};

const funnelData: FunnelStep[] = [
  { 
    step: "Visit", 
    value: 8000,
    microSteps: [
      { id: 'landing_page_view', description: 'Homepage load', status: 'Completed', value: 8000 },
      { id: 'cta_try_photo_clicked', description: '“Try your photo” CTA', status: 'Completed', value: 4500 },
    ]
  },
  { 
    step: "Photo Uploaded", 
    value: 4500,
    microSteps: [
      { id: 'upload_started', description: 'File picker / drag-drop', status: 'Completed', value: 4500 },
      { id: 'photo_uploaded', description: 'Upload success', status: 'Completed', value: 2500 },
    ]
  },
  { 
    step: "Configurated", 
    value: 2500,
    microSteps: [
      { id: 'configure_opened', description: 'Configurator rendered', status: 'Completed', value: 2500 },
      { id: 'filter_applied', description: 'Filter confirm', status: 'Completed', value: 2450 },
      { id: 'size_or_frame_changed', description: 'Size / frame selector', status: 'Failed', value: 1800 },
      { id: 'entered_ar_preview', description: 'AR modal open / close', status: 'Completed', value: 1200 },
    ]
  },
  { 
    step: "Added to Cart", 
    value: 1200,
    microSteps: [
      { id: 'added_to_cart', description: '“Add to cart” click', status: 'Completed', value: 1200 },
      { id: 'checkout_started', description: 'Stripe session created', status: 'Completed', value: 1100 },
      { id: 'payment_method_entered', description: 'Card/Apple Pay page', status: 'Failed', value: 900 },
      { id: 'shipping_submitted', description: 'Address confirmed', status: 'Completed', value: 600 },
    ]
  },
  { 
    step: "Order Completed", 
    value: 600,
    microSteps: [
      { id: 'payment_attempted', description: 'Payment Initiated', status: 'Completed', value: 600 },
      { id: 'payment_failed', description: 'Charge declined', status: 'Failed', value: 550 },
      { id: 'order_completed', description: 'Stripe webhook success', status: 'Completed', value: 550 },
    ]
  },
];

export function PurchaseFunnelChart() {
  const totalSessions = funnelData[0]?.value || 0;
  const finalValue = funnelData[funnelData.length - 1]?.value || 0;
  const finalConversionRate =
    totalSessions > 0 ? (finalValue / totalSessions) * 100 : 0;

  const getPolygonPoints = () => {
    const total = funnelData[0]?.value || 1;
    const numSteps = funnelData.length;
    if (numSteps < 2) return "0,0 100,0 100,100 0,100";

    const topPoints = funnelData
      .map((item, index) => {
        const x = (100 / (numSteps - 1)) * index;
        const y = 100 - (item.value / total) * 100;
        return `${x.toFixed(2)},${y.toFixed(2)}`;
      })
      .join(" ");

    return `${topPoints} 100,100 0,100`;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap justify-between items-start gap-4">
          <div>
            <CardTitle className="flex items-center gap-2">
              Funnel Analysis
            </CardTitle>
            <CardDescription>
              From first visit to final purchase
            </CardDescription>
          </div>
          <div className="flex gap-6 text-right">
            <div>
              <div className="text-sm text-muted-foreground flex items-center gap-1.5">
                <Users className="h-4 w-4" /> SESSIONS
              </div>
              <div className="text-2xl font-bold">
                {totalSessions.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground flex items-center gap-1.5">
                <BarChart className="h-4 w-4" /> CONVERSION RATE
              </div>
              <div className="text-2xl font-bold">
                {finalConversionRate.toFixed(1)}%
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-2 overflow-x-auto">
        <div className="min-w-[1000px]">
          <div className="grid" style={{ gridTemplateColumns: `repeat(${funnelData.length}, minmax(0, 1fr))` }}>
            {/* Step titles */}
            {funnelData.map((item, index) => (
              <div key={item.step} className="p-4 text-left border-b border-r last:border-r-0">
                <div className="text-xs text-muted-foreground uppercase">Step {index + 1}</div>
                <div className="font-semibold">{item.step}</div>
              </div>
            ))}
          </div>

          <div className="relative">
            {/* Graph background */}
            <div className="absolute inset-0 h-[200px]">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points={getPolygonPoints()} className="fill-yellow-300" />
              </svg>
            </div>

            <div className="grid relative" style={{ gridTemplateColumns: `repeat(${funnelData.length}, minmax(0, 1fr))` }}>
              {/* Session numbers */}
              {funnelData.map((item, index) => (
                <div key={item.step} className="p-4 text-left h-[200px] border-r last:border-r-0 flex flex-col justify-start pt-8">
                  <div className="text-xs text-muted-foreground">SESSIONS</div>
                  <div className="text-3xl font-bold">{item.value.toLocaleString()}</div>
                  {index > 0 && (
                    <div className="text-xs text-muted-foreground">
                      {((item.value / funnelData[index - 1].value) * 100).toFixed(1)}% of previous
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="grid" style={{ gridTemplateColumns: `repeat(${funnelData.length}, minmax(0, 1fr))` }}>
              {funnelData.map((item, index) => {
                if (index === 0) {
                  return (
                    <div key="watch-first" className="p-4 border-r flex flex-col justify-end">
                      <StepDetails microSteps={item.microSteps} />
                    </div>
                  )
                }

                const isLast = index === funnelData.length - 1;
                const prevItem = funnelData[index - 1];

                if (isLast) {
                  return (
                    <div key="conversion" className="p-4 text-center">
                      <div className="flex flex-col items-center">
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white mb-2">
                          <Check className="h-4 w-4" />
                        </div>
                        <div className="text-xs text-muted-foreground uppercase">CONVERSION</div>
                        <div className="text-xl font-bold text-green-500">{finalConversionRate.toFixed(1)}%</div>
                        <div className="text-xs text-muted-foreground">({finalValue.toLocaleString()})</div>
                      </div>
                      <StepDetails microSteps={item.microSteps} className="mt-4" />
                    </div>
                  )
                }
                
                const dropOff = prevItem.value - item.value;
                const dropOffPercent = (dropOff / prevItem.value) * 100;
                
                return (
                  <div key={`${item.step}-dropoff`} className="p-4 text-center border-r">
                    <div className="flex flex-col items-center">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-destructive text-destructive-foreground mb-2">
                        <ArrowDown className="h-4 w-4" />
                      </div>
                      <div className="text-xs text-muted-foreground uppercase">DROPOFF</div>
                      <div className="text-xl font-bold text-destructive">{dropOffPercent.toFixed(1)}%</div>
                      <div className="text-xs text-muted-foreground">({dropOff.toLocaleString()})</div>
                    </div>
                    <StepDetails microSteps={item.microSteps} className="mt-4" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
