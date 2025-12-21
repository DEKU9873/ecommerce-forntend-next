import { Checkbox } from '@/components/ui/checkbox';
import type { ColumnDef } from '@tanstack/react-table';

import { ArrowUpDown } from 'lucide-react';
import { ICustomer } from '@/types/customer';
import CustomerActions from './CustomerActions';

export const customerColumns: ColumnDef<ICustomer>[] = [
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
          className='flex  items-center gap-2 hover:text-primary cursor-pointer'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown size={18} />
        </div>
      )
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,


  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <div
          className='flex  items-center gap-2 hover:text-primary cursor-pointer'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown size={18} />
        </div>
      )
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("email")}</div>,


  },
  {
    accessorKey: "phone",
    header: ({ column }) => {
      return (
        <div
          className='flex  items-center gap-2 hover:text-primary cursor-pointer'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Phone
          <ArrowUpDown size={18} />
        </div>
      )
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("phone")}</div>,


  },

  {
    accessorKey: "createAt",
    header: ({ column }) => {
      return (
        <div
          className='flex  items-center gap-2 hover:text-primary cursor-pointer'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Create At
          <ArrowUpDown size={18} />
        </div>
      )
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("createAt")}</div>,


  },
  {
    accessorKey: "updateAt",
    header: ({ column }) => {
      return (
        <div
          className='flex  items-center gap-2 hover:text-primary cursor-pointer'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Update At
          <ArrowUpDown size={18} />
        </div>
      )
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("updateAt")}</div>,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <CustomerActions customer={row.original} />,
  },
];

