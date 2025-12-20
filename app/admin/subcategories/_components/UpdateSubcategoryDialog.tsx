

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";




import type { ISubcategory } from "@/types/subcategory";

import UpdateSubcategoryForm from "./UpdateSubcategoryForm";

const UpdateSubcategoryDialog = ({
  data,
  isOpen,
  onClose,
}: {
  data: ISubcategory;
  isOpen: boolean;
  onClose: () => void;
}) => {
 

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* Dialog content */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-xl  text-sidebar-foreground/70">
            Edit Category
          </DialogTitle>
        </DialogHeader>

       <UpdateSubcategoryForm data={data} closeModal={onClose}/>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateSubcategoryDialog;
