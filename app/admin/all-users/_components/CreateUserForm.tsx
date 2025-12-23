import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
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
import { Roles } from "@/constant";
import { userSchema } from "@/schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const CreateUserForm = ({ closeModal }: { closeModal: () => void }) => {
  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      role: "",
      
    },
  });

  const onSubmit = (values: z.infer<typeof userSchema>) => {
    console.log("Form Values:", values);
    closeModal();
    form.reset();
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 font-cairo"
      >
<div className="grid grid-cols-2 gap-4">
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter email" {...field} />
              </FormControl>
              <FormDescription>Write the email</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="Enter phone" {...field} />
              </FormControl>
              <FormDescription>Write the phone</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <Combobox
                  items={
                    Roles?.map((role) => ({
                      value: role.value,
                      label: role.label,
                    })) || []
                  }
                  {...field}
                  placeholder="Select role"
                />
              </FormControl>
              <FormDescription>Select a role</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

      


</div>

        <Button type="submit" className="w-full bg-primary">
          Add
        </Button>
      </form>
    </Form>
  );
};

export default CreateUserForm;
