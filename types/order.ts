import { IAddress } from "./adders";
import { IUser } from "./user";

export interface IOrder {
  id: string;
  user: IUser;
  orderItems: string[];
  shippingAddress: IAddress;
  paymentMethod: string;
  itemsPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt: string;
  isDelivered: boolean;
  deliveredAt: string;
  createdAt: string;
  updatedAt: string;
}