"use client";

import {
  Form,
  FormControl,
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

import productSchema from "@/schemas/productSchema";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

import { useState } from "react";
import Image from "next/image";

import { Combobox } from "@/components/ui/combobox";
import { categories } from "@/data/categoriesData";
import { subcategories } from "@/data/subcategoriesData";
import { brands } from "@/data/brandsData";
import useModalStore from "@/store/modal.store";
import { Plus } from "lucide-react";


const CreateProductDialog = () => {
  const { isOpen, type, openModal, closeModal } = useModalStore();
  const [previews, setPreviews] = useState<string[]>([]);

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "0",
      priceAfterDiscount: "0",
      stock: "0",
      category: "",
      subcategory: "",
      brand: "",
      images: null,
      isFeatured: false,
    },
  });

  const onSubmit = (values: z.infer<typeof productSchema>) => {
    console.log("Form Values:", values);

    closeModal();
    form.reset();
    setPreviews([]);
  };

  return (
    <Dialog
      open={isOpen && type === "add"}
      onOpenChange={(open) => {
        if (!open) {
          closeModal();
          setPreviews([]);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button
          onClick={() => openModal("add")}
          className="bg-primary"
        >
          <Plus />

          Add Product
        </Button>
      </DialogTrigger>

      <DialogContent className="lg:min-w-[1100px] md:min-w-[650px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-xl font-cairo text-sidebar-foreground/70">
            Add Product
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-5">
              {/* name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter name in Arabic" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="priceAfterDiscount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price After Discount</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stock</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
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
                        items={categories.map(c => ({ value: c.id, label: c.name }))}
                        {...field}
                        placeholder="Select category"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subcategory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subcategory</FormLabel>
                    <FormControl>
                      <Combobox
                        items={subcategories.map(s => ({ value: s.id, label: s.name }))}
                        {...field}
                        placeholder="Select subcategory"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Brand</FormLabel>
                    <FormControl>
                      <Combobox
                        items={brands.map(b => ({ value: b.id, label: b.name }))}
                        {...field}
                        placeholder="Select brand"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="images"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Images</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={(e) => {
                          const files = e.target.files;
                          if (!files) return;

                          const arr = Array.from(files);
                          setPreviews(arr.map(f => URL.createObjectURL(f)));
                          field.onChange(arr);
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />


              {/* description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description (Arabic)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />


              {/* featured */}
              <FormField
                control={form.control}
                name="isFeatured"
                render={({ field }) => (
                  <FormItem className="col-span-2 flex gap-3 border p-4 rounded-md">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>Featured Product</FormLabel>
                  </FormItem>
                )}
              />
            </div>

            {/* previews */}
            {previews.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {previews.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    width={200}
                    height={200}
                    className="rounded border object-cover"
                    alt={`preview-${i}`}
                  />
                ))}
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

export default CreateProductDialog;
