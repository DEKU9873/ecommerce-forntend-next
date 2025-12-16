import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
import type { IBrand } from "@/types/brand";
import UpdateBrandDialog from "./UpdateBrandDialog";
import { useState } from "react";



const BrandActions: React.FC<{ brand: IBrand }> = ({ brand }) => {
   const [deleteModal, setDeleteModal] = useState(false);
        const [editModal, setEditModal] = useState(false);
        const [selectedItem, setSelectedItem] = useState<IBrand | null>(null);
      
        const handleOpenDeleteModal = () => {
          setDeleteModal(true);
        };
      
        const handleDeleteConfirm = () => {
          console.log(`Deleting brand with ID: ${brand.id}`);
          setDeleteModal(false);
        };
      

        const handleCloseDeleteModal = () => {
          setDeleteModal(false);
        };
      
        const handleOpenEditModal = () => {
          setSelectedItem(brand);
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
                    <UpdateBrandDialog
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
                        onClick={() => navigator.clipboard.writeText(brand.id)}
                    >
                        Copy brand ID
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleOpenDeleteModal} className="text-destructive">
                        Delete brand
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleOpenEditModal} >
                        Edit brand
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

export default BrandActions;
