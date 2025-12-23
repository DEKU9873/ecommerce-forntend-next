import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/react-table";

import { ArrowUpDown } from "lucide-react";

import { IVehicle } from "@/types/vehicle";
import VehicleActions from "./VehicleActions";

export const vehicleColumns: ColumnDef<IVehicle>[] = [
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
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <div
          className="flex  items-center gap-2 hover:text-primary cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Driver Name
          <ArrowUpDown size={18} />
        </div>
      );
    },
    cell: ({ row }) => {
      const user = row.original.user;

      return <div className="capitalize">{user?.name}</div>;
    },
  },

  {
    accessorKey: "phone",
    header: ({ column }) => {
      return (
        <div
          className="flex  items-center gap-2 hover:text-primary cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Phone
          <ArrowUpDown size={18} />
        </div>
      );
    },
    cell: ({ row }) => {
      const user = row.original.user;

      return <div className="capitalize">{user?.phone}</div>;
    },
  },
  {
    accessorKey: "vehicleType",
    header: ({ column }) => {
      return (
        <div
          className="flex  items-center gap-2 hover:text-primary cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Vhicle Type
          <ArrowUpDown size={18} />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("vehicleType")}</div>
    ),
  },
  {
    accessorKey: "vehicleNumber",
    header: ({ column }) => {
      return (
        <div
          className="flex  items-center gap-2 hover:text-primary cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Vehicle Number
          <ArrowUpDown size={18} />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("vehicleNumber")}</div>
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
      <div className="capitalize">{row.getValue("createdAt")}</div>
    ),
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => {
      return (
        <div
          className="flex  items-center gap-2 hover:text-primary cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Update At
          <ArrowUpDown size={18} />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("updatedAt")}</div>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <VehicleActions driver={row.original} />,
  },
];
