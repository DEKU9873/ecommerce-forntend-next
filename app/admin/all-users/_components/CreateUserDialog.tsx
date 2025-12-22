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
import CreateCategoryForm from "./CreateUserForm";
import { Plus } from "lucide-react";


const CreateUserDialog = () => {
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

          Add User
        </Button>
      </DialogTrigger>

      <DialogContent className="lg:min-w-[1100px] md:min-w-[650px]">
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-xl font-cairo text-sidebar-foreground/70">
          
            Add User
          </DialogTitle>
        </DialogHeader>
        <CreateCategoryForm closeModal={closeModal} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateUserDialog;
