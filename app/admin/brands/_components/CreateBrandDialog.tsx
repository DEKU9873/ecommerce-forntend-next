"use client";



import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { useState } from "react";
import useModalStore from "@/store/modal.store";
import CreateBrandForm from "./CreateBrandForm";
import { Plus } from "lucide-react";


const CreateBrandDialog = () => {
  const { isOpen, type, openModal, closeModal } = useModalStore();
  const [preview, setPreview] = useState<string | null>(null);



  return (
    <Dialog
      open={isOpen && type === "add"}
      onOpenChange={(open) => {
        if (!open) {
          closeModal();
          setPreview(null);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button
          onClick={() => openModal("add")}
          className="bg-primary"
        >
          <Plus />
          Add Brand
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-xl font-cairo text-sidebar-foreground/70">
            Add Brand
          </DialogTitle>
        </DialogHeader>

      <CreateBrandForm closeModal={closeModal} preview={preview} setPreview={setPreview} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateBrandDialog;
