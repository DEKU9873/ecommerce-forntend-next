

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";


import { ICategory } from "@/types/category";
import UpdateCategoryForm from "./UpdateCategoryForm";

const UpdateCategoryDialog = ({
  data,
  isOpen,
  onClose,
}: {
  data: ICategory;
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

       <UpdateCategoryForm data={data} closeModal={onClose}/>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateCategoryDialog;
