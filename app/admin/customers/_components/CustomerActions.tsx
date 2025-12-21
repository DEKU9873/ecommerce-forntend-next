"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";

import useModalStore from "@/store/modal.store";
import { ICustomer } from "@/types/customer";

const CustomerActions = ({ customer }: { customer: ICustomer }) => {
  const { isOpen, type, data, openModal, closeModal } = useModalStore();

  const handleDeleteConfirm = () => {
    console.log(`Deleting customer with ID: ${data.id}`);
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
            onClick={() => navigator.clipboard.writeText(customer.id)}
          >
            Copy customer ID
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            onClick={() => openModal("delete", customer)}
            className="text-destructive"
          >
            Delete Customer
          </DropdownMenuItem>

 
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default CustomerActions;
