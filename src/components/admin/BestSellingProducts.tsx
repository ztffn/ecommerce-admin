
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
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

const productsData = [
  { name: "Sports Shoes", image: "https://i.imgur.com/3uL4qfV.jpeg", sold: 10, sales: "$316.00" },
  { name: "Black T-Shirt", image: "https://i.imgur.com/sC05nJ0.jpeg", sold: 20, sales: "$274.00" },
  { name: "Jeans", image: "https://i.imgur.com/K3sqiIL.jpeg", sold: 15, sales: "$195.00" },
  { name: "Red Sneakers", image: "https://i.imgur.com/J3yP3Uh.jpeg", sold: 40, sales: "$402.00" },
  { name: "Red Scarf", image: "https://i.imgur.com/ZTgG35F.jpeg", sold: 37, sales: "$280.00" },
];

export function BestSellingProducts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Best Selling Products</CardTitle>
        <CardDescription>Top products by sales volume.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead className="text-right">Sold</TableHead>
              <TableHead className="text-right">Sales</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productsData.map((product) => (
              <TableRow key={product.name}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9 rounded-md">
                      <AvatarImage src={product.image} alt={product.name} />
                      <AvatarFallback>{product.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{product.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">{product.sold}</TableCell>
                <TableCell className="text-right font-medium">{product.sales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
