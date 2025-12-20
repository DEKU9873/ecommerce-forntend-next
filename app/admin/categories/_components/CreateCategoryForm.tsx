import { Button } from "@/components/ui/button";
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

import categorySchema from "@/schemas/categorySchema";

const CreateCategoryForm = ({ closeModal }: { closeModal: () => void }) => {
  const form = useForm<z.infer<typeof categorySchema>>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
    },
  });
  

  const onSubmit = (values: z.infer<typeof categorySchema>) => {
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
  )
}

export default CreateCategoryForm
