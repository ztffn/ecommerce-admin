
import { OrdersTable } from "@/components/admin/OrdersTable";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";

export default function AdminOrders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Orders</CardTitle>
        <CardDescription>A list of all recent orders.</CardDescription>
      </CardHeader>
      <CardContent>
        <OrdersTable />
      </CardContent>
    </Card>
  );
}
