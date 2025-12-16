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
import brandSchema from "@/schemas/brandSchema";
import { useState } from "react";
import Image from "next/image";

const CreateBrandDialog = () => {
  const form = useForm<z.infer<typeof brandSchema>>({
    resolver: zodResolver(brandSchema),
    defaultValues: {
      name: "",
      image: null,
    },
  });

const [addModal, setAddModal] = useState(false);
const [preview, setPreview] = useState<string | null>(null);
  const handleOpen = () => {
    setAddModal(true);
  };

  const handleClose = () => {
    setAddModal(false);
  };


  const onSubmit = (values: z.infer<typeof brandSchema>) => {
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
          Add Brand
        </Button>
      </DialogTrigger>

      {/* Dialog content */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-xl font-cairo text-sidebar-foreground/70">
            Add Brand
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
                    <Input placeholder="Enter name " {...field} />
                  </FormControl>
                  <FormDescription>Write the name </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      name={field.name}
                      // ref={field.ref}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setPreview(URL.createObjectURL(file));
                          field.onChange(file);
                        }
                      }}
                    />


                  </FormControl>
                  <FormDescription>Upload an image </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {preview && (
              <div className="mt-4 flex justify-center">
                <Image
                width={200}
                height={200}
                  src={preview}
                  alt="معاينة الصورة"
                  className="w-32 h-32 object-cover rounded-lg border"
                />
              </div>
            )}

 
              <Button type="submit" className="w-full bg-primary">
                Add
              </Button>
            
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBrandDialog;
