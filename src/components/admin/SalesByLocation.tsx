
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const salesData = [
  { country: 'Canada', percentage: 85, change: '+5.2%', changeType: 'increase' },
  { country: 'Greenland', percentage: 80, change: '+7.8%', changeType: 'increase' },
  { country: 'Russia', percentage: 63, change: '-2.1%', changeType: 'decrease' },
  { country: 'China', percentage: 60, change: '+3.4%', changeType: 'increase' },
  { country: 'Australia', percentage: 45, change: '+1.2%', changeType: 'increase' },
  { country: 'Greece', percentage: 40, change: '+1%', changeType: 'increase' },
];

export function SalesByLocation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales by Location</CardTitle>
        <CardDescription>Income in the last 28 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {salesData.map((item) => (
            <div key={item.country} className="flex items-center">
              <div className="flex items-center gap-2 w-1/3">
                <span className="font-medium">{item.country}</span>
                <span className={`text-xs ${item.changeType === 'increase' ? 'text-emerald-500 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-900' : 'text-red-500 bg-red-100 dark:text-red-400 dark:bg-red-900'} px-1.5 py-0.5 rounded-md`}>
                  {item.change}
                </span>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                </div>
              </div>
              <div className="w-12 text-right text-muted-foreground">{item.percentage}%</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
