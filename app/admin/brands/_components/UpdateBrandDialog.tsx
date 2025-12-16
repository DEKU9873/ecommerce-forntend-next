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

import brandSchema from "@/schemas/brandSchema";
import type { IBrand } from "@/types/brand";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";

const UpdateBrandDialog = ({
  data,
  isOpen,
  onClose,
}: {
  data: IBrand;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [localImage, setLocalImage] = useState<StaticImageData | string>(
    data.image
  );

  const form = useForm<z.infer<typeof brandSchema>>({
    resolver: zodResolver(brandSchema),
    defaultValues: {
      name: data.name || "",
      image: data.image || null,
    },
  });

  const onSubmit = (values: z.infer<typeof brandSchema>) => {
    console.log("Editing brand with values:", values);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-xl text-sidebar-foreground/70">
            Edit brand
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const blob = URL.createObjectURL(file);
                          setLocalImage(blob);
                          field.onChange(file);
                        }
                      }}
                    />
                  </FormControl>
                  <FormDescription>Upload brand image</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {localImage && (
              <div className="mt-4 flex justify-center">
                <Image
                  width={200}
                  height={200}
                  src={localImage}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-lg border"
                />
              </div>
            )}

            <Button type="submit" className="w-full bg-primary">
              Edit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateBrandDialog;
