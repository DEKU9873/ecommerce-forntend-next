import { z } from "zod";

const productSchema = z.object({
  name: z.string().min(1, "name is required"),
  description: z.string().min(1, "description is required"),
  price: z.string().min(1, "descriptionAr is required"),
  priceAfterDiscount: z.string().optional(),
  stock: z.string().min(1, "descriptionAr is required"),
  category: z.string().min(1, "category is required"),
  subcategory: z.string().min(1, "subcategory is required"),
  brand: z.string().min(1, "brand is required"),
  images: z.any().optional().nullable(),
  isFeatured: z.boolean().optional(),
});

export default productSchema;
