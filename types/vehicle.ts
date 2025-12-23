import { IUser } from "./user";

export interface IVehicle {
  id: string;
  user: IUser;

  vehicleType: string;
  vehicleNumber: string;

  isActive: boolean;

  createdAt: string;
  updatedAt?: string;
}
