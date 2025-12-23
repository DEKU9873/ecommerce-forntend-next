"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import addressSchema from "@/schemas/addressSchema";
import MapPicker from "./MapPicker";

type Schema = z.infer<typeof addressSchema>;

const CreateAddressForm = ({ closeModal}: { closeModal: () => void }) => {
  const form = useForm<Schema>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
        title: "",
      city: "",
      address: "",
      posetion: [33.3152, 44.3661],
    },
  });

  const { control, handleSubmit, reset, setValue, watch } = form;

  const pos = watch("posetion");

  function onSubmit(values: Schema) {
    console.log("address submit", values);
    closeModal();
    reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 font-cairo">
       <div className="grid grid-cols-2 gap-4">
         <FormField
          control={control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="City" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       </div>

         <FormField
          control={control}
          name="posetion"
          render={() => (
            <FormItem>
              <FormLabel>Selected Position</FormLabel>
              <div className="h-80 rounded-md overflow-hidden">
                <MapPicker
                  position={pos as [number, number]}
                  onChange={(p) => setValue("posetion", p as [number, number], { shouldValidate: true, shouldDirty: true })}
                />
              </div>
              <div className="mt-2 text-sm">position: {pos ? `${pos[0].toFixed(6)}, ${pos[1].toFixed(6)}` : "لم يتم الاختيار"}</div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full bg-primary">
          Add
        </Button>
      </form>
    </Form>
  );
};

export default CreateAddressForm;
