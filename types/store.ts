import { IUser } from "./user";

export interface IStore {
  id: string;
  user: IUser;

  storeName: string;
  storeDescription: string;
  storeEmail: string;
  storePhone: string;
  storeAddress: string;

  isActive: boolean;

  createdAt: string;
  updatedAt: string;
}