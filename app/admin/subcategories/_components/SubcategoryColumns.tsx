import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/react-table";

import { ArrowUpDown } from "lucide-react";

import type { ISubcategory } from "@/types/subcategory";
import SubcategoryActions from "./SubcategoryActions";

export const subcategoryColumns: ColumnDef<ISubcategory>[] = [
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
          Name
          <ArrowUpDown size={18} />
        </div>
      );
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },

  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <div
          className="flex  items-center gap-2 hover:text-primary cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <ArrowUpDown size={18} />
        </div>
      );
    },
    cell: ({ row }) => {
      const category = row.original.category;

      return <div className="capitalize">{category?.name}</div>;
    },
  },
  {
    accessorKey: "createAt",
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
      <div className="capitalize">{row.getValue("createAt")}</div>
    ),
  },
  {
    accessorKey: "updateAt",
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
      <div className="capitalize">{row.getValue("updateAt")}</div>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <SubcategoryActions subcategory={row.original} />,
  },
];
