
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowDown, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type MicroStep = {
  id: string;
  description: string;
  status: 'Completed' | 'Failed';
  value: number;
};

interface StepDetailsProps {
  microSteps: MicroStep[];
  stepName: string;
  className?: string;
}

export function StepDetails({ microSteps, stepName, className }: StepDetailsProps) {

  if (!microSteps || microSteps.length === 0) {
    return null;
  }

  return (
    <Card className={cn("w-full", className)}>
        <CardHeader>
            <CardTitle>Details for: {stepName}</CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead>Micro-step</TableHead>
                <TableHead className="text-right">Sessions</TableHead>
                <TableHead className="text-right">Dropoff</TableHead>
                <TableHead className="text-right w-[80px]">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {microSteps.map((step, index) => {
                  const dropoff = index > 0 ? microSteps[index - 1].value - step.value : 0;
                  const dropoffPercent =
                    index > 0 && microSteps[index - 1].value > 0
                      ? (dropoff / microSteps[index - 1].value) * 100
                      : 0;
                
                  return (
                    <TableRow key={step.id}>
                        <TableCell className="font-medium text-xs">{step.description}</TableCell>
                        <TableCell className="text-right text-xs">{step.value.toLocaleString()}</TableCell>
                        <TableCell className="text-right text-xs">
                          {index > 0 && dropoff > 0 ? (
                            <span className="flex items-center justify-end text-destructive">
                              <ArrowDown className="h-3 w-3 mr-1" />
                              {dropoffPercent.toFixed(1)}%
                            </span>
                          ) : (
                            <span className="text-muted-foreground">-</span>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                        {step.status === 'Completed' ? (
                            <CheckCircle2 className="h-4 w-4 text-green-500 inline-block" />
                        ) : (
                            <XCircle className="h-4 w-4 text-destructive inline-block" />
                        )}
                        </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
            </Table>
        </CardContent>
    </Card>
  );
}
