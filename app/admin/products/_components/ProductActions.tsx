"use client"

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";

import UpdateCategoryDialog from "./UpdateProductDialog";
import { IProduct } from "@/types/product";
import { useState } from "react";
import { useRouter } from "next/navigation";


interface ProductActionsProps {
    product: IProduct;
}

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => {
    const route = useRouter();
 const [deleteModal, setDeleteModal] = useState(false);
        const [editModal, setEditModal] = useState(false);
        const [selectedItem, setSelectedItem] = useState<IProduct | null>(null);
      
        const handleOpenDeleteModal = () => {
          setDeleteModal(true);
        };
      
        const handleDeleteConfirm = () => {
          console.log(`Deleting product with ID: ${product.id}`);
          setDeleteModal(false);
        };
      

        const handleCloseDeleteModal = () => {
          setDeleteModal(false);
        };
      
        const handleOpenEditModal = () => {
          setSelectedItem(product);
          setEditModal(true);
        };
      
        const handleCloseEditModal = () => {
          setEditModal(false);
        };
   


    return (
        <>
            {deleteModal && (
                <DeleteConfirmationDialog
                    isOpen={deleteModal}
                    onClose={handleCloseDeleteModal}
                    onConfirm={handleDeleteConfirm}
                />
            )}

            {
                editModal && selectedItem && (
                    <UpdateCategoryDialog
                        data={selectedItem}
                        isOpen={editModal}
                        onClose={handleCloseEditModal}
                    />
                )
            }
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                        onClick={() => navigator.clipboard.writeText(product.id)}
                    >
                        Copy product ID
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={() => route.push(`/products/id`)}
                    >
                       View product
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleOpenDeleteModal} className="text-destructive">
                        Delete product
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleOpenEditModal} >
                        Edit product
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

export default ProductActions;
