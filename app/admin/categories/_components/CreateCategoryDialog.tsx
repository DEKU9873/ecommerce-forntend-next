"'use client';";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import categorySchema from "@/schemas/categorySchema";
import { useState } from "react";

const CreateCategoryDialog = () => {
  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
    },
  });

  const [addModal, setAddModal] = useState(false);

  const handleOpen = () => {
    setAddModal(true);
  };

  const handleClose = () => {
    setAddModal(false);
  };

  const onSubmit = (values: z.infer<typeof categorySchema>) => {
    console.log("Form Values:", values);
  };

  return (
    <Dialog
      open={addModal}
      onOpenChange={(open) => {
        if (open) handleOpen();
        else handleClose();
      }}
    >
      {/* Button to open dialog */}
      <DialogTrigger asChild>
        <Button onClick={handleOpen} className="bg-primary">
          Add Category
        </Button>
      </DialogTrigger>

      {/* Dialog content */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-xl font-cairo text-sidebar-foreground/70">
            Add Category
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 font-cairo"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name (Arabic)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter name in Arabic" {...field} />
                  </FormControl>
                  <FormDescription>Write the name in Arabic</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-primary">
              Add
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCategoryDialog;
