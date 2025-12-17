import { StaticImageData } from "next/image";
import type { IBrand } from "./brand";
import type { ICategory } from "./category";
import type { ISubcategory } from "./subcategory";

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  priceAfterDiscount: string;
  stock: string;
  category: ICategory;
  subcategory: ISubcategory;
  brand: IBrand
  images: (string | StaticImageData)[];
  mainImage: string | StaticImageData;
  isFeatured: boolean | undefined;
  createdAt?: string;
  updatedAt?: string;
}


