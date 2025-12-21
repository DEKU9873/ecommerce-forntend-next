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
import CreateCategoryForm from "./CreateCustomerForm";
import { Plus } from "lucide-react";


const CreateCustomerDialog = () => {
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

          Add Customer
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-xl font-cairo text-sidebar-foreground/70">
          
            Add Customer
          </DialogTitle>
        </DialogHeader>
        <CreateCategoryForm closeModal={closeModal} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateCustomerDialog;
