import Link from 'next/link';
import { useRouter } from 'next/router';
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
  TestTube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
// Badge is not used in the provided code, so I'm commenting it out.
// import { Badge } from "@/components/ui/badge";
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
import React from 'react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();

  const navLinks = [
    { href: "/admin/overview", icon: Home, text: "Overview" },
    { href: "/admin/funnels", icon: Filter, text: "Funnels" },
    { href: "/admin/roas", icon: DollarSign, text: "ROAS" },
    { href: "/admin/orders", icon: ShoppingCart, text: "Orders" }, // Removed badge: "6" as it's not directly supported without state
    { href: "/admin/products", icon: Package, text: "Products" },
    { href: "/admin/customers", icon: Users, text: "Customers" },
    { href: "/admin/experiments", icon: TestTube, text: "A/B Tests" },
    { href: "/admin/analytics", icon: LineChart, text: "Analytics" },
  ];

  const isActive = (path: string) => router.pathname.startsWith(path);

  return (
    <div className="grid min-h-screen w-full grid-cols-[80px_1fr]">
      <div className="border-r bg-muted/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center justify-center border-b lg:h-[60px]">
            <Link
              href="/admin"
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
                      href={link.href}
                      className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-primary ${
                        isActive(link.href)
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
          {children}
        </main>
      </div>
    </div>
  );
}
