
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ProductsTable } from "@/components/admin/ProductsTable";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const globalSettingsSchema = z.object({
  profitMargin: z.coerce.number().min(0, "Must be positive").optional(),
  discount: z.coerce.number().min(0, "Must be positive").optional(),
});

export default function AdminProducts() {
  const form = useForm<z.infer<typeof globalSettingsSchema>>({
    resolver: zodResolver(globalSettingsSchema),
    defaultValues: {
      profitMargin: 40,
      discount: 10,
    },
  });
  
  function onSubmit(values: z.infer<typeof globalSettingsSchema>) {
    console.log("Global settings updated:", values);
    // Here you would typically update the settings in your backend
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Global Settings</CardTitle>
          <CardDescription>
            Set default profit margins and discounts for all products. These can
            be overridden on an individual product basis.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid md:grid-cols-3 gap-4 items-end">
              <FormField
                control={form.control}
                name="profitMargin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Global Profit Margin (%)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 40" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="discount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Global Discount (%)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 10" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center">
                 <Button type="submit">Save Global Settings</Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
            <div>
                <CardTitle>Products</CardTitle>
                <CardDescription>
                Manage your products, set pricing, and discounts.
                </CardDescription>
            </div>
            <Button>Add Product</Button>
        </CardHeader>
        <CardContent>
          <ProductsTable />
        </CardContent>
      </Card>
    </div>
  );
}
