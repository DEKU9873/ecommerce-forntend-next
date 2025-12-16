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
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import categorySchema from "@/schemas/categorySchema";
import { ICategory } from "@/types/category";

const UpdateCategoryDialog = ({
  data,
  isOpen,
  onClose,
}: {
  data: ICategory;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: data.name || "",
    },
  });

  const onSubmit = (values: z.infer<typeof categorySchema>) => {
    console.log("Editing category with values:", values);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* Dialog content */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-xl  text-sidebar-foreground/70">
            Edit Category
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter name " {...field} />
                  </FormControl>
                  <FormDescription>Write the name </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-primary">
              Edit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateCategoryDialog;
