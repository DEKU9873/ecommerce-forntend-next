"use client"

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";

import { IProduct } from "@/types/product";
import { useRouter } from "next/navigation";
import useModalStore from "@/store/modal.store";
import UpdateProductDialog from "./UpdateProductDialog";


interface ProductActionsProps {
    product: IProduct;
}

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => {
    const route = useRouter();
    const { isOpen, type, data, openModal, closeModal } = useModalStore();

    const handleDeleteConfirm = () => {
        console.log(`Deleting category with ID: ${data.id}`);
        closeModal();
    };

    return (
        <>
            {isOpen && type === "delete" && (
                <DeleteConfirmationDialog
                    isOpen={true}
                    onClose={closeModal}
                    onConfirm={handleDeleteConfirm}
                />
            )}

            {isOpen && type === "edit" && data && (
                <UpdateProductDialog
                    data={data}
                    isOpen={true}
                    onClose={closeModal}
                />
            )}
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
                    <DropdownMenuItem
                        onClick={() => openModal("delete", product)}
                        className="text-destructive"
                    >
                        Delete product
                    </DropdownMenuItem>

                    <DropdownMenuItem
                        onClick={() => openModal("edit", product)}
                    >
                        Edit product
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

export default ProductActions;
