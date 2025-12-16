import { z } from "zod";


const subcategorySchema = z.object({
  name: z.string().min(1, "name is required"),
  category: z.string().min(1, "category is required"), 
});

export default subcategorySchema