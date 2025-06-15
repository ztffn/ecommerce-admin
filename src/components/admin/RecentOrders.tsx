
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const ordersData = [
  {
    id: "#1023",
    customer: { name: "Theodore Bell", avatar: "/placeholder.svg" },
    product: "Tire Doodad",
    amount: "$300.00",
    status: "Processing",
  },
  {
    id: "#2045",
    customer: { name: "Amelia Grant", avatar: "/placeholder.svg" },
    product: "Engine Kit",
    amount: "$450.00",
    status: "Paid",
  },
  {
    id: "#3067",
    customer: { name: "Eleanor Ward", avatar: "/placeholder.svg" },
    product: "Brake Pad",
    amount: "$200.00",
    status: "Success",
  },
  {
    id: "#4089",
    customer: { name: "Henry Carter", avatar: "/placeholder.svg" },
    product: "Fuel Pump",
    amount: "$500.00",
    status: "Processing",
  },
  {
    id: "#5102",
    customer: { name: "Olivia Harris", avatar: "/placeholder.svg" },
    product: "Steering Wheel",
    amount: "$350.00",
    status: "Failed",
  },
];

export function RecentOrders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ordersData.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={order.customer.avatar} alt="Avatar" />
                      <AvatarFallback>{order.customer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <span>{order.customer.name}</span>
                  </div>
                </TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell className="text-right">{order.amount}</TableCell>
                <TableCell className="text-right">
                  <Badge 
                    variant={
                      order.status === 'Paid' || order.status === 'Success' ? 'default' : 
                      order.status === 'Processing' ? 'secondary' : 'destructive'
                    }
                    className="capitalize"
                  >
                    {order.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
