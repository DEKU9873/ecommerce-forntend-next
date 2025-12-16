import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";

import UpdateSubcategoryDialog from "./UpdateSubcategoryDialog";
import type { ISubcategory } from "@/types/subcategory";
import { useState } from "react";

interface SubcategoryActionsProps {
    subcategory: ISubcategory;
}

const SubcategoryActions: React.FC<SubcategoryActionsProps> = ({ subcategory }) => {
   const [deleteModal, setDeleteModal] = useState(false);
     const [editModal, setEditModal] = useState(false);
     const [selectedItem, setSelectedItem] = useState<ISubcategory | null>(null);
     console.log(selectedItem);
   
     const handleOpenDeleteModal = () => {
       setDeleteModal(true);
     };
   
     const handleDeleteConfirm = () => {
       console.log(`Deleting subcategory with ID: ${subcategory.id}`);
       setDeleteModal(false);
     };
   
     const handleCloseDeleteModal = () => {
       setDeleteModal(false);
     };
   
     const handleOpenEditModal = () => {
       setSelectedItem(subcategory);
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
                    <UpdateSubcategoryDialog
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
                        onClick={() => navigator.clipboard.writeText(subcategory.id)}
                    >
                        Copy subcategory ID
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleOpenDeleteModal} className="text-destructive">
                        Delete subcategory
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleOpenEditModal} >
                        Edit subcategory
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

export default SubcategoryActions;
