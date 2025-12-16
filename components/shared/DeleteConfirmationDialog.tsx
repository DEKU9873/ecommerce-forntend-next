import { AlertTriangle } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";

interface DeleteConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

const DeleteConfirmationDialog: React.FC<DeleteConfirmationDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Delete Confirmation",
  description = "Are you sure you want to delete this item? This action cannot be undone.",
  confirmButtonText = "Delete",
  cancelButtonText = "Cancel",
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-6">
        <DialogHeader className="flex flex-col items-center text-center space-y-3">
          <AlertTriangle className="text-customLight w-10 h-10" />
          <DialogTitle className="text-xl font-bold ">{title}</DialogTitle>
          <DialogDescription className="text-gray-500 dark:text-gray-400 ">
            {description}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-center gap-4 pt-4">
          <Button variant="outline" onClick={onClose} className="px-6">
            {cancelButtonText}
          </Button>
          <Button onClick={onConfirm} className="px-6">
            {confirmButtonText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteConfirmationDialog;
