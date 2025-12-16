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

import productSchema from "@/schemas/productSchema";
import { Textarea } from "@/components/ui/textarea";

import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { subcategories } from "@/data/subcategoriesData";
import { Combobox } from "@/components/ui/combobox";
import { brands } from "@/data/brandsData";
import Image from "next/image";
import { categories } from "@/data/categoriesData";

const CreateProductDialog = () => {
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

const [addModal, setAddModal] = useState(false);
const [previews, setPreviews] = useState<string[]>([]);

  const handleOpen = () => {
    setAddModal(true);
  };

  const handleClose = () => {
    setAddModal(false);
  };

  const onSubmit = (values: z.infer<typeof productSchema>) => {
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
          Add Product
        </Button>
      </DialogTrigger>

      {/* Dialog content */}
      <DialogContent className="lg:min-w-[1100px] md:min-w-[650px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-xl font-cairo text-sidebar-foreground/70">
            Add Product
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-5">
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
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description (Arabic)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter description in Arabic"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Write the description in Arabic
                    </FormDescription>
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
                      <Input type="number" placeholder="Enter price" {...field} />
                    </FormControl>
                    <FormDescription>Write the price</FormDescription>
                    <FormMessage />
                  </FormItem>
                )
                }
              />
              <FormField
                control={form.control}
                name="priceAfterDiscount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter price" {...field} />
                    </FormControl>
                    <FormDescription>Write the price</FormDescription>
                    <FormMessage />
                  </FormItem>
                )
                }
              />

              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stock</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter stock" {...field} />
                    </FormControl>
                    <FormDescription>Write the stock</FormDescription>
                    <FormMessage />
                  </FormItem>
                )
                }
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
                    <FormDescription>Select a category for this product</FormDescription>
                    <FormMessage />
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
                        items={subcategories?.map((subcat) => ({ value: subcat.id, label: subcat.name })) || []}
                        {...field}

                        placeholder="Select subcategory"
                      />
                    </FormControl>
                    <FormDescription>Select a subcategory for this product</FormDescription>
                    <FormMessage />
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
                        items={brands?.map((brand) => ({ value: brand.id, label: brand.name })) || []}
                        {...field}

                        placeholder="Select brand"
                      />
                    </FormControl>
                    <FormDescription>Select a brand for this product</FormDescription>
                    <FormMessage />
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
                        accept="image/*"
                        multiple
                        onChange={(e) => {
                          const files = e.target.files;
                          if (files && files.length > 0) {
                            const fileArray = Array.from(files);

                            const previewUrls = fileArray.map((file) => URL.createObjectURL(file));
                            setPreviews(previewUrls);

                            field.onChange(fileArray);
                          }
                        }}

                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="isFeatured"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 col-span-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Featured Product
                      </FormLabel>
                      <FormDescription>
                        This product will appear on the home page
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </div>

            {previews.length > 0 && (
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {previews.map((src, index) => (
                  <div key={index} className="flex justify-center">
                    <Image
                      width={200}
                      height={200}
                      src={src}
                      alt={`Preview ${index}`}
                      className="w-32 h-32 object-cover rounded-lg border"
                    />
                  </div>
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
