import { Checkbox } from '@/components/ui/checkbox';
import type { ColumnDef } from '@tanstack/react-table';

import { ArrowUpDown } from 'lucide-react';

import { IStore } from '@/types/store';
import StoreActions from './StoreActions';

export const storeColumns: ColumnDef<IStore>[] = [
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
    accessorKey: "ownerName",
    header: ({ column }) => {
      return (
        <div
          className='flex  items-center gap-2 hover:text-primary cursor-pointer'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
         Owner Name
          <ArrowUpDown size={18} />
        </div>
      )
    },
    cell: ({ row }) => {
     const user = row.original.user;

      return <div className="capitalize">{user?.name}</div>;
    },


  },

  {
    accessorKey: "storeName",
    header: ({ column }) => {
      return (
        <div
          className='flex  items-center gap-2 hover:text-primary cursor-pointer'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Stor Name
          <ArrowUpDown size={18} />
        </div>
      )
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("storeName")}</div>,


  },
  {
    accessorKey: "storeEmail",
    header: ({ column }) => {
      return (
        <div
          className='flex  items-center gap-2 hover:text-primary cursor-pointer'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
         Stor Email
          <ArrowUpDown size={18} />
        </div>
      )
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("storeEmail")}</div>,


  },
  {
    accessorKey: "storePhone",
    header: ({ column }) => {
      return (
        <div
          className='flex  items-center gap-2 hover:text-primary cursor-pointer'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
         Stor Phone
          <ArrowUpDown size={18} />
        </div>
      )
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("storePhone")}</div>,


  },
  {
    accessorKey: "storeAddress",
    header: ({ column }) => {
      return (
        <div
          className='flex  items-center gap-2 hover:text-primary cursor-pointer'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
         Stor Address
          <ArrowUpDown size={18} />
        </div>
      )
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("storeAddress")}</div>,


  },
  


  {
    accessorKey: "createdAt",
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
    cell: ({ row }) => <div className="capitalize">{row.getValue("createdAt")}</div>,


  },
  {
    accessorKey: "updatedAt",
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
    cell: ({ row }) => <div className="capitalize">{row.getValue("updatedAt")}</div>,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <StoreActions vendor={row.original} />,
  },
];

