import { Checkbox } from '@/components/ui/checkbox';
import { formatDate } from '@/lib/formatDate';

import type { ColumnDef } from '@tanstack/react-table';

import { ArrowUpDown } from 'lucide-react';
import type { IProduct } from '@/types/product';
import { Badge } from "@/components/ui/badge";
import ProductActions from './ProductActions';
import Image from 'next/image';


export const productColumns: ColumnDef<IProduct>[] = [
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
  accessorKey: "mainImage",
  header: "Image",

  cell: ({ row }) => {
    const imagePath: string = row.getValue("mainImage");   

    return (
      <Image
        width={100}
        height={100}
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
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <div
          className='flex  items-center gap-2 hover:text-primary cursor-pointer'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown size={18} />
        </div>
      )
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("price")}</div>,


  },
  {
    accessorKey: "priceAfterDiscount",
    header: ({ column }) => {
      return (
        <div
          className='flex  items-center gap-2 hover:text-primary cursor-pointer'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Discount
          <ArrowUpDown size={18} />
        </div>
      )
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("priceAfterDiscount")}</div>,

  },
  {
    accessorKey: "stock",
    header: ({ column }) => {
      return (
        <div
          className='flex  items-center gap-2 hover:text-primary cursor-pointer'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Stock
          <ArrowUpDown size={18} />
        </div>
      )
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("stock")}</div>,


  },
{
    accessorKey: "isFeatured",
    header: "Featured",
    cell: ({ row }) => {
      const value = row.getValue("isFeatured");
      return (
        <Badge variant={value ? "default" : "destructive"}>
          {value ? "Yes" : "No"}
        </Badge>
      );
    },
  },

    {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <div
          className='flex  items-center gap-2 hover:text-primary cursor-pointer'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <ArrowUpDown size={18} />
        </div>
      )
    },
    cell: ({ row }) => {
      const category = row.original.category;
  
      return <div className="capitalize">{category?.name}</div>;
    },

  },
  //   {
  //   accessorKey: "subcategory",
  //   header: ({ column }) => {
  //     return (
  //       <div
  //         className='flex  items-center gap-2 hover:text-primary cursor-pointer'
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //       >
  //         Subcategory
  //         <ArrowUpDown size={18} />
  //       </div>
  //     )
  //   },
  //   cell: ({ row }) => {
  //     const subcategory = row.original.subcategory;
  
  //     return <div className="capitalize">{subcategory?.nameEn}</div>;
  //   },

  // },
    {
    accessorKey: "brand",
    header: ({ column }) => {
      return (
        <div
          className='flex  items-center gap-2 hover:text-primary cursor-pointer'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Brand
          <ArrowUpDown size={18} />
        </div>
      )
    },
    cell: ({ row }) => {
      const brand = row.original.brand;
  
      return <div className="capitalize">{brand?.name}</div>;
    },

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
    cell: ({ row }) => <div className="capitalize">{formatDate(row.getValue("createdAt"))}</div>,


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
    cell: ({ row }) => <div className="capitalize">{formatDate(row.getValue("updatedAt"))}</div>,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <ProductActions product={row.original} />,
  },
];

