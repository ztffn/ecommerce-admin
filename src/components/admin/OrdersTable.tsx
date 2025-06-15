
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { orders } from "@/data/ordersData";

export function OrdersTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 10;

  const totalPages = Math.ceil(orders.length / ordersPerPage);
  const currentOrders = orders.slice(
    (currentPage - 1) * ordersPerPage,
    currentPage * ordersPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPaginationItems = () => {
    const items = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink href="#" isActive={i === currentPage} onClick={(e) => { e.preventDefault(); handlePageChange(i); }}>
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    } else {
      items.push(
        <PaginationItem key={1}>
          <PaginationLink href="#" isActive={1 === currentPage} onClick={(e) => { e.preventDefault(); handlePageChange(1); }}>
            1
          </PaginationLink>
        </PaginationItem>
      );
      
      if (currentPage > 3) {
        items.push(<PaginationItem key="start-ellipsis"><PaginationEllipsis /></PaginationItem>);
      }

      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 3) {
        startPage = 2;
        endPage = 4;
      }
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
        endPage = totalPages - 1;
      }

      for (let i = startPage; i <= endPage; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink href="#" isActive={i === currentPage} onClick={(e) => { e.preventDefault(); handlePageChange(i); }}>
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }

      if (currentPage < totalPages - 2) {
        items.push(<PaginationItem key="end-ellipsis"><PaginationEllipsis /></PaginationItem>);
      }

      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink href="#" isActive={totalPages === currentPage} onClick={(e) => { e.preventDefault(); handlePageChange(totalPages); }}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return items;
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={order.customer.avatar} alt="Avatar" />
                    <AvatarFallback>{order.customer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{order.customer.name}</div>
                    <div className="text-sm text-muted-foreground">{order.customer.email}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{order.product}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell className="text-right">
                {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(order.amount)}
              </TableCell>
              <TableCell className="text-center">
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
      {totalPages > 1 && (
        <div className="mt-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1); }} className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''} />
              </PaginationItem>
              {renderPaginationItems()}
              <PaginationItem>
                <PaginationNext href="#" onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1); }} className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </>
  );
}
