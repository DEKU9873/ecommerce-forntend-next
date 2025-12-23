import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(1, "name is required"),
  email: z.string().min(1, "email is required"),
  phone: z.string().min(1, "phone is required"),
  role: z.string().min(1, "role is required"),
});
