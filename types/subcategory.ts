import { ICategory } from "./category";

export interface ISubcategory {
  id: string;
  name: string;
  category: ICategory;
  createdAt?: string;
  updatedAt?: string;
}




