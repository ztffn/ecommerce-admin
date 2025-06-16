import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CustomersTable } from "@/components/admin/CustomersTable";
import { FileDown } from "lucide-react";

export default function AdminCustomers() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Customers</CardTitle>
          <CardDescription>
            Manage your customers and view their purchase history.
          </CardDescription>
        </div>
        <Button size="sm" variant="outline">
          <FileDown className="h-4 w-4 mr-2" />
          Export
        </Button>
      </CardHeader>
      <CardContent>
        <CustomersTable />
      </CardContent>
    </Card>
  );
}
