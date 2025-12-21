import { ICustomer } from "./customer";

export interface IDriver {
  id: string;
  user: ICustomer;

  vehicleType: string;
  vehicleNumber: string;

  isActive: boolean;

  createdAt: string;
  updatedAt?: string;
}
