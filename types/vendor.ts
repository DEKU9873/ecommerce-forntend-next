import { ICustomer } from "./customer";

export interface IVendor {
  id: string;
  user: ICustomer;

  storeName: string;
  storeDescription: string;
  storeEmail: string;
  storePhone: string;
  storeAddress: string;

  isActive: boolean;

  createdAt: string;
  updatedAt: string;
}