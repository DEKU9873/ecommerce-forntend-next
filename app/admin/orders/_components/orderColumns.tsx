import { Checkbox } from "@/components/ui/checkbox";
import { formatDate } from "@/lib/formatDate";
import type { ColumnDef } from "@tanstack/react-table";

import { ArrowUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { IOrder } from "@/types/order";
import OrderActions from "./OrderActions";

export const orderColumns: ColumnDef<IOrder>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div className="capitalize">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "user",
    header: "Customer",
    cell: ({ row }) => {
      const user = row.original.user;
      return <div className="capitalize">{user?.fullName}</div>;
    },
  },

  {
    accessorKey: "isPaid",
    header: "Payment",
    cell: ({ row }) => {
      const value = row.getValue("isPaid");
      return (
        <Badge variant={value ? "default" : "destructive"}>
          {value ? "Payed" : "Unpayed"}
        </Badge>
      );
    },
  },
  {
    accessorKey: "totalPrice",
    header: "Total",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("totalPrice")}</div>
    ),
  },

  {
    accessorKey: "isDelivered",
    header: "Delivery",
    cell: ({ row }) => {
      const value = row.getValue("isDelivered");
      return (
        <Badge variant={value ? "default" : "destructive"}>
          {value ? "Delivered" : "Undelivered"}
        </Badge>
      );
    },
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const value = row.getValue("status");

      let variant:
        | "default"
        | "destructive"
        | "success"
        | "warning"
        | "secondary"
        | "info" = "default";

      switch (value) {
        case "pending":
          variant = "warning";
          break;
        case "processing":
          variant = "secondary";
          break;
        case "shipped":
          variant = "info";
          break;
        case "delivered":
          variant = "success";
          break;
        case "cancelled":
          variant = "destructive";
          break;
      }
      return <Badge variant={variant}>{value}</Badge>;
    },
  },

  {
    accessorKey: "orderItems",
    header: "Items",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("orderItems")?.length}</div>
    ),
  },

  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <div
          className="flex  items-center gap-2 hover:text-primary cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Create At
          <ArrowUpDown size={18} />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{formatDate(row.getValue("createdAt"))}</div>
    ),
  },

  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <OrderActions order={row.original} />,
  },
];
