
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  Home,
  Package,
  ShoppingCart,
  Users,
  LineChart,
  Filter,
  DollarSign,
  CircleUser,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function AdminLayout() {
  const location = useLocation();

  const navLinks = [
    { to: "/admin/overview", icon: Home, text: "Overview" },
    { to: "/admin/funnels", icon: Filter, text: "Funnels" },
    { to: "/admin/roas", icon: DollarSign, text: "ROAS" },
    { to: "/admin/orders", icon: ShoppingCart, text: "Orders", badge: "6" },
    { to: "/admin/products", icon: Package, text: "Products" },
    { to: "/admin/customers", icon: Users, text: "Customers" },
    { to: "#", icon: LineChart, text: "Analytics" },
  ];

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <div className="grid min-h-screen w-full grid-cols-[80px_1fr]">
      <div className="border-r bg-muted/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center justify-center border-b lg:h-[60px]">
            <Link
              to="/admin"
              className="flex items-center justify-center gap-2 font-semibold"
            >
              <Package className="h-6 w-6" />
              <span className="sr-only">Webshop Inc</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-center justify-center gap-1 p-2 text-sm font-medium">
              {navLinks.map((link) => (
                <Tooltip key={link.text}>
                  <TooltipTrigger asChild>
                    <Link
                      to={link.to}
                      className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-primary ${
                        isActive(link.to)
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      <link.icon className="h-5 w-5" />
                      <span className="sr-only">{link.text}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>{link.text}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <div className="w-full flex-1">
            {/* Future search bar can go here */}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="icon" className="rounded-full">
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Sign Out</span>
          </Button>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
