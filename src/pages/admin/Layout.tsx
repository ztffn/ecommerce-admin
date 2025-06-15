import { Outlet, Link, useLocation } from "react-router-dom";
import {
  Bell,
  Home,
  Package,
  ShoppingCart,
  Users,
  LineChart,
  Filter,
  DollarSign,
  Menu,
  CircleUser,
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
    { to: "#", icon: ShoppingCart, text: "Orders", badge: "6" },
    { to: "#", icon: Package, text: "Products" },
    { to: "#", icon: Users, text: "Customers" },
    { to: "#", icon: LineChart, text: "Analytics" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[80px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center justify-center border-b lg:h-[60px]">
            <Link
              to="/admin"
              className="flex items-center justify-center gap-2 font-semibold"
            >
              <Package className="h-6 w-6" />
              <span className="sr-only">SwiftFrame Inc</span>
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
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  to="#"
                  className="flex items-center gap-2 text-lg font-semibold mb-4"
                >
                  <Package className="h-6 w-6" />
                  <span className="sr-only">SwiftFrame Inc</span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.text}
                    to={link.to}
                    className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ${
                      isActive(link.to)
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <link.icon className="h-5 w-5" />
                    {link.text}
                    {link.badge && (
                      <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        {link.badge}
                      </Badge>
                    )}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

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
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
