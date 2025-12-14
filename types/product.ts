

export interface IProduct {
  _id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  price: string;
  priceAfterDiscount: string;
  stock: string;
  category: ICategory;
  subcategory: ISubcategory;
  brand: IBrand
  images: string[];
  mainImage?: string;
  isFeatured: boolean | undefined;
  createdAt?: string;
  updatedAt?: string;
  __v: number;
}

