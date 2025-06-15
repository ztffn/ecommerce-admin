
import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronDown, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type MicroStep = {
  id: string;
  description: string;
  status: 'Completed' | 'Failed';
};

interface StepDetailsProps {
  microSteps: MicroStep[];
  className?: string;
}

export function StepDetails({ microSteps, className }: StepDetailsProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  if (!microSteps || microSteps.length === 0) {
    return null;
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className={cn("w-full", className)}>
      <CollapsibleTrigger asChild>
        <Button variant="outline" size="sm" className="w-full">
          <ChevronDown
            className={`mr-2 h-4 w-4 shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
          Details
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2 py-1">
        <div className="border rounded-md">
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead>Micro-step</TableHead>
                <TableHead className="text-right w-[80px]">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {microSteps.map((step) => (
                <TableRow key={step.id}>
                    <TableCell className="font-medium text-xs">{step.description}</TableCell>
                    <TableCell className="text-right">
                    {step.status === 'Completed' ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500 inline-block" />
                    ) : (
                        <XCircle className="h-4 w-4 text-destructive inline-block" />
                    )}
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
