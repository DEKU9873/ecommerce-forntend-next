"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import useModalStore from "@/store/modal.store";
import CreateCategoryForm from "./CreateCategoryForm";
import { Plus } from "lucide-react";


const CreateCategoryDialog = () => {
  const { isOpen, type, openModal, closeModal } = useModalStore();



  return (
    <Dialog
      open={isOpen && type === "add"}
      onOpenChange={(open) => {
        if (!open) closeModal();
      }}
    >
      <DialogTrigger asChild>
        <Button
          onClick={() => openModal("add")}
          className="bg-primary"
        >
          <Plus />

          Add Category
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-xl font-cairo text-sidebar-foreground/70">
          
            Add Category
          </DialogTitle>
        </DialogHeader>
        <CreateCategoryForm closeModal={closeModal} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateCategoryDialog;
