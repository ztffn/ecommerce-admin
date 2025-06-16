
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type TimePeriodSelectorProps = {
  value: string;
  onValueChange: (value: string) => void;
  periods: Array<{ value: string; label: string }>;
};

export function TimePeriodSelector({ value, onValueChange, periods }: TimePeriodSelectorProps) {
  return (
    <Tabs value={value} onValueChange={onValueChange} className="w-auto">
      <TabsList className="grid w-full grid-cols-3">
        {periods.map((period) => (
          <TabsTrigger key={period.value} value={period.value}>
            {period.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
