
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const salesData = [
  { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00", avatar: "/placeholder.svg" },
  { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00", avatar: "/placeholder.svg" },
  { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00", avatar: "/placeholder.svg" },
  { name: "William Kim", email: "will@email.com", amount: "+$99.00", avatar: "/placeholder.svg" },
  { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00", avatar: "/placeholder.svg" },
];

export function RecentSales() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription>You made 265 sales this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {salesData.map((sale, index) => (
            <div className="flex items-center" key={index}>
              <Avatar className="h-9 w-9">
                <AvatarImage src={sale.avatar} alt="Avatar" />
                <AvatarFallback>{sale.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{sale.name}</p>
                <p className="text-sm text-muted-foreground">{sale.email}</p>
              </div>
              <div className="ml-auto font-medium">{sale.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
