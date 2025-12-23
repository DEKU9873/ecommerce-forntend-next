import { IUser } from "./user";

export interface IAddress {
  id: string;
  user: IUser;
  title: string;
  city: string;
  address: string;
  posetion: [number, number];
  createdAt?: string;  
  updatedAt?: string;   
}
