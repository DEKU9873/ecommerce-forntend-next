import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import subcategorySchema from "@/schemas/subcategorySchema";
import { Combobox } from "@/components/ui/combobox";
import { categories } from "@/data/categoriesData";
import { Button } from "@/components/ui/button";
const CreateSubcategoryForm = ({closeModal}:{closeModal:()=>void}) => {
      const form = useForm<z.infer<typeof subcategorySchema>>({
    resolver: zodResolver(subcategorySchema),
    defaultValues: {
      name: "",
      category: "",
    },
  });

  const onSubmit = (values: z.infer<typeof subcategorySchema>) => {
    console.log("Form Values:", values);

    closeModal();
    form.reset();
  };


  return (
     <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 font-cairo"
          >
            {/* الاسم */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
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
                      items={
                        categories?.map((cat) => ({
                          value: cat.id,
                          label: cat.name,
                        })) || []
                      }
                      {...field}
                      placeholder="Select category"
                    />
                  </FormControl>
                  <FormDescription>
                    Select a category for this subcategory
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-primary">
              Add
            </Button>
          </form>
        </Form>
  )
}

export default CreateSubcategoryForm
