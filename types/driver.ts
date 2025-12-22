import { IUser } from "./user";

export interface IDriver {
  id: string;
  user: IUser;

  vehicleType: string;
  vehicleNumber: string;

  isActive: boolean;

  createdAt: string;
  updatedAt?: string;
}
