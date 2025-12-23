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
import CreateAddressForm from "./CreateAddressForm";
import { Plus } from "lucide-react";

const CreateAddressDialog = () => {
  const { isOpen, type, openModal, closeModal } = useModalStore();

  return (
    <Dialog open={isOpen && type === "add"} onOpenChange={(open) => { if (!open) closeModal(); }}>
      <DialogTrigger asChild>
        <Button onClick={() => openModal("add")} className="bg-primary">
          <Plus />
          Add Address
        </Button>
      </DialogTrigger>

      <DialogContent className="lg:min-w-[1100px] md:min-w-[650px]">
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-xl font-cairo text-sidebar-foreground/70">Add Address</DialogTitle>
        </DialogHeader>

        <CreateAddressForm closeModal={closeModal}  />
      </DialogContent>
    </Dialog>
  );
};

export default CreateAddressDialog;
