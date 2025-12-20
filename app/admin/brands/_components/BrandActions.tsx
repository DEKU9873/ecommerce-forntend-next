import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
import type { IBrand } from "@/types/brand";
import UpdateBrandDialog from "./UpdateBrandDialog";
import useModalStore from "@/store/modal.store";



const BrandActions: React.FC<{ brand: IBrand }> = ({ brand }) => {
  const { isOpen, type, data, openModal, closeModal } = useModalStore();

  const handleDeleteConfirm = () => {
    console.log(`Deleting brand with ID: ${data.id}`);
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
        <UpdateBrandDialog
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
            onClick={() => navigator.clipboard.writeText(brand.id)}
          >
            Copy brand ID
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            onClick={() => openModal("delete", brand)}
            className="text-destructive"
          >
            Delete brand
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => openModal("edit", brand)}
          >
            Edit brand
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default BrandActions;
