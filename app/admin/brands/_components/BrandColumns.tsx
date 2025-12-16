import { Checkbox } from '@/components/ui/checkbox';

import type { ColumnDef } from '@tanstack/react-table';

import { ArrowUpDown } from 'lucide-react';
import type { IBrand } from '@/types/brand';
import Image from 'next/image';
import BrandActions from './BrandActions';

export const brandColumns: ColumnDef<IBrand>[] = [
  
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
  accessorKey: "image",
  header: "Image",

  cell: ({ row }) => {
    const imagePath: string = row.getValue("image");   

    return (
      <Image
        width={50}
        height={50}
        src={imagePath}
        alt="brand"
        className="w-14 h-14 object-cover rounded-full"
      />
    );
  },
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
    cell: ({ row }) => <BrandActions brand={row.original} />,
  },
];

