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

import brandSchema from "@/schemas/brandSchema";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const CreateBrandForm = ({closeModal, preview, setPreview}: {closeModal:()=>void; preview: string | null; setPreview: React.Dispatch<React.SetStateAction<string | null>>}) => {
      const form = useForm<z.infer<typeof brandSchema>>({
    resolver: zodResolver(brandSchema),
    defaultValues: {
      name: "",
      image: null,
    },
  });

  const onSubmit = (values: z.infer<typeof brandSchema>) => {
    console.log("Form Values:", values);

    closeModal();
    form.reset();
    setPreview(null);
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
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setPreview(URL.createObjectURL(file));
                          field.onChange(file);
                        }
                      }}
                    />
                  </FormControl>
                  <FormDescription>Upload an image</FormDescription>
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
  )
}

export default CreateBrandForm
