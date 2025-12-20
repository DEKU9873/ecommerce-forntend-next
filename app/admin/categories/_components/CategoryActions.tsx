"use client";

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

import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";

import { ICategory } from "@/types/category";
import useModalStore from "@/store/modal.store";
import UpdateCategoryDialog from "./UpdateCategoryDialog";

const CategoryActions = ({ category }: { category: ICategory }) => {
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
        <UpdateCategoryDialog
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
            onClick={() => navigator.clipboard.writeText(category.id)}
          >
            Copy category ID
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            onClick={() => openModal("delete", category)}
            className="text-destructive"
          >
            Delete Category
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => openModal("edit", category)}
          >
            Edit Category
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default CategoryActions;
