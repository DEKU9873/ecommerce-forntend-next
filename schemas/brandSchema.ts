import { z } from "zod";


const brandSchema = z.object({
  name: z.string().min(1, "name is required"),
  image: z.any().optional().nullable(),
});

export default brandSchema