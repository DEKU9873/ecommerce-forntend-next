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
      storeName: "",
      storeDescription: "",
      storeEmail: "",
      storePhone: "",
      storeLocation: "",
      storeAddress: "",
      vehicleType: "",
      vehicleNumber: "",
    },
  });

  const role = form.watch("role");
console.log(role)
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

        {role === "vendor" && (
<div className="col-span-2 grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="storeName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Store Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter store name" {...field} />
                  </FormControl>
                  <FormDescription>Write the store name</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="storeDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Store Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter store description" {...field} />
                  </FormControl>
                  <FormDescription>Write the store description</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="storeEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Store Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter store email" {...field} />
                  </FormControl>
                  <FormDescription>Write the store email</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="storePhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Store Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter store phone" {...field} />
                  </FormControl>
                  <FormDescription>Write the store phone</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="storeLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Store Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter store location" {...field} />
                  </FormControl>
                  <FormDescription>Write the store location</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="storeAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Store Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter store address" {...field} />
                  </FormControl>
                  <FormDescription>Write the store address</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}

        {role === "driver" && (
<div className="col-span-2 grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="vehicleType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vehicle Type</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter vehicle type" {...field} />
                  </FormControl>
                  <FormDescription>Write the vehicle type</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="vehicleNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vehicle Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter vehicle number" {...field} />
                  </FormControl>
                  <FormDescription>Write the vehicle number</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}
</div>

        <Button type="submit" className="w-full bg-primary">
          Add
        </Button>
      </form>
    </Form>
  );
};

export default CreateUserForm;
