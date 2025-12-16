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

import subcategorySchema from "@/schemas/subcategorySchema";
import { Combobox } from "@/components/ui/combobox";
import { categories } from "@/data/categoriesData";
import { useState } from "react";


const CreateSubcategoryDialog = () => {
  const form = useForm<z.infer<typeof subcategorySchema>>({
    resolver: zodResolver(subcategorySchema),
    defaultValues: {
      name: "",
      category: "",
    },
  });

  const [addModal, setAddModal] = useState(false);

  const handleOpen = () => {
    setAddModal(true);
  };

  const handleClose = () => {
    setAddModal(false);
  };

  const onSubmit = (values: z.infer<typeof subcategorySchema>) => {
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
          Add Subcategory
        </Button>
      </DialogTrigger>

      {/* Dialog content */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-xl font-cairo text-sidebar-foreground/70">
            Add Subcategory
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
                  <FormLabel>Name </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter name" {...field} />
                  </FormControl>
                  <FormDescription>Write the name</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Combobox
                      items={categories?.map((cat) => ({ value: cat.id, label: cat.name })) || []}
                     {...field}
         
                      placeholder="Select category"
                    />
                  </FormControl>
                  <FormDescription>Select a category for this subcategory</FormDescription>
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

export default CreateSubcategoryDialog;