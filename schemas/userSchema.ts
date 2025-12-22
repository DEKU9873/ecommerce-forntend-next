import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(1, "name is required"),
  email: z.string().min(1, "email is required"),
  phone: z.string().min(1, "phone is required"),
  role: z.string().min(1, "role is required"),


  storeName: z.string().optional(),
  storeDescription: z.string().optional(),
  storeEmail: z.string().optional(),
  storePhone: z.string().optional(),
  storeLocation: z.string().optional(),
  storeAddress: z.string().optional(),
  vehicleType: z.string().optional(),
  vehicleNumber: z.string().optional(),

});
