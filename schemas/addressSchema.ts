import { z } from "zod";

const addressSchema = z.object({
    title: z.string().min(1, "Title is required"),
  city: z.string().min(1, "City is required"),
  address: z.string().min(1, "Address is required"),
  posetion: z.tuple([z.number(), z.number()]),
});

export default addressSchema;
