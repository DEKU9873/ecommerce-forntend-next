import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

import UpdateCategoryDialog from "./UpdateCategoryDialog";
import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
import { useState } from "react";
import { ICategory } from "@/types/category";

const CategoryActions = ({ category }: { category: ICategory }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ICategory | null>(null);
  console.log(selectedItem);

  const handleOpenDeleteModal = () => {
    setDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    console.log(`Deleting category with ID: ${category.id}`);
    setDeleteModal(false);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModal(false);
  };

  const handleOpenEditModal = () => {
    setSelectedItem(category);
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

      {editModal && selectedItem && (
        <UpdateCategoryDialog
          data={selectedItem}
          isOpen={editModal}
          onClose={handleCloseEditModal}
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
            onClick={() => navigator.clipboard.writeText(category.id)}
          >
            Copy category ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={handleOpenDeleteModal}
            className="text-destructive"
          >
            Delete Category
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleOpenEditModal}>
            Edit Category
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default CategoryActions;
