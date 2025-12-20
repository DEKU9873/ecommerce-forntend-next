import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";

import UpdateSubcategoryDialog from "./UpdateSubcategoryDialog";
import type { ISubcategory } from "@/types/subcategory";
import useModalStore from "@/store/modal.store";

interface SubcategoryActionsProps {
    subcategory: ISubcategory;
}

const SubcategoryActions: React.FC<SubcategoryActionsProps> = ({ subcategory }) => {
  const { isOpen, type, data, openModal, closeModal } = useModalStore();

  const handleDeleteConfirm = () => {
    console.log(`Deleting subcategory with ID: ${data.id}`);
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
        <UpdateSubcategoryDialog
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
            onClick={() => navigator.clipboard.writeText(subcategory.id)}
          >
            Copy subcategory ID
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            onClick={() => openModal("delete", subcategory)}
            className="text-destructive"
          >
            Delete subcategory
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => openModal("edit", subcategory)}
          >
            Edit subcategory
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default SubcategoryActions;
